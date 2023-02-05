/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class AuthService {

    constructor(private prisma : PrismaService, private jwt: JwtService, private config: ConfigService){

    }

    async signup(dto: AuthDto) {

        try{

            //generate the hash password
            const hash = await argon.hash(dto.password)
            //save the new user IN THE DB
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
                
            }) 
            //return to user the saved user
            return this.signToken(user.id,user.email)
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException(
                        'Credentials taken',
                    );
                }
                
            }
            throw error;
        }
        
    }

    async signin(dto: AuthDto) {

        //find the user by email
        const user = 
        await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        })
        //if user does not exist throw exception
        if(!user) throw new ForbiddenException('Credentials incorrect',);
        //compare password
        const pwdMatches = await argon.verify(user.hash,dto.password);
        //if password incorect throw exception
        if(!pwdMatches) throw new ForbiddenException('Credentials incorrect',);
        //send back the user
        return this.signToken(user.id,user.email)
    }

    async signToken(userId: number, email: string): Promise<{ access_token: string }>{
        const payload = {
            sub: userId,
            email: email
        }

        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(
            payload,
            {
            expiresIn: '15m',
            secret: secret,
            }
        )

        const access_token = { access_token: token}
        return access_token;
    }
}
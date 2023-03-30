/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthMobileDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class AuthMobileService {

    constructor(private prisma : PrismaService, private jwt: JwtService, private config: ConfigService){

    }

    async signup(dto: AuthMobileDto) {
        try{

            //generate the hash password
            const hash = await argon.hash(String(dto.password))
            //save the new user IN THE DB
            const benevole = await this.prisma.benevole.create({
                data: {
                    prenom: String(dto.prenom),
                    nom: String(dto.nom),
                    email: String(dto.email),
                    mdp: hash,
                    isAdmin: dto.isAdmin

                },
                
            }) 
            //return to user the saved user
            // return this.signToken(benevole.id,benevole.email)
            delete benevole.mdp
            return benevole
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

    async signin(dto: AuthMobileDto) {

        //find the user by email
        const benevole = 
        await this.prisma.benevole.findUnique({
            where: {
                email: String(dto.email),
            },
        })
        //if user does not exist throw exception
        if(!benevole) throw new ForbiddenException('Credentials incorrect',);
        //compare password
        const pwdMatches = await argon.verify(benevole.mdp,String(dto.password));
        //if password incorect throw exception
        if(!pwdMatches) throw new ForbiddenException('Credentials incorrect',);
        //send back the user
        return this.signToken(Number(benevole.id),String(benevole.email))
    }

    async signinMobile(dto: AuthMobileDto) {

        //find the user by email
        const benevole = 
        await this.prisma.benevole.findUnique({
            where: {
                email: String(dto.email),
            },
        })
        //if user does not exist throw exception
        if(!benevole) throw new ForbiddenException('Credentials incorrect',);
        //compare password
        const pwdMatches = await argon.verify(benevole.mdp,String(dto.password));
        //if password incorect throw exception
        if(!pwdMatches) throw new ForbiddenException('Credentials incorrect',);
        //send back the user
        delete benevole.mdp
        console.log(benevole)
        return benevole
    }

    async signToken(benevoleId: number, email: string): Promise<{ access_token: string }>{
        console.log('here')
        const payload = {
            sub: benevoleId,
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
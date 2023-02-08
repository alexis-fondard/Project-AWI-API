import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeJeuDto } from './dto';

@Injectable()
export class TypeJeuService {
    constructor(private prisma: PrismaService) {}

    async create(dto: TypeJeuDto) {
        const typeJeu = await this.prisma.type_jeu.create({
            data: {
                nom: dto.label,
            },
        });
        //return to user the saved typeJeu
        return typeJeu;
    }

    async findAll(){
        const typeJeux = await this.prisma.type_jeu.findMany({});
        return typeJeux;
    }

    async findOne(id: number){
        const typeJeu = await this.prisma.type_jeu.findFirst({
            where:{
                id: id
            }
        })
    }

    async updateOne(id: number, dto: TypeJeuDto){
        console.log(dto)

        if(id == null){
            throw new ForbiddenException('Credentials Not According to DTO');
        }
        const typeJeu = await this.prisma.type_jeu.update({
            where: {
                id: Number(id)
            },
            data:{
                nom: dto.label,
            },
        });
        return typeJeu;
    }

    async deleteOne(id: number){
        const typeJeu = await this.prisma.type_jeu.delete({
            where:{
                id: id
            }
        });
        return typeJeu;
    }
}

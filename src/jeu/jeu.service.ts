import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JeuDto } from './dto';
import { TypeJeuDto } from 'src/type_jeu/dto/type_jeu.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class JeuService {
    constructor(private prisma: PrismaService) {}

    async create(dto: JeuDto) {
        const jeu = await this.prisma.jeu.create({
            data: {
                nom: dto.nom,
                // type_jeu: dto.type_jeu,
                // label_type_jeu: dto.type_jeu.label
                type_jeu: {
                    connect: {
                        label: dto.type_jeu.label,
                    },
                },
            },
        });
        return jeu;
    }

    async findAll() {
        const jeux = await this.prisma.jeu.findMany({});
        return jeux;
    }

    async findOne(id: number) {
        const jeu = await this.prisma.jeu.findFirst({
            where: {
                id: Number(id),
            },
        });
    }

    async updateOne(id: number, dto: JeuDto) {
        console.log(dto);

        if (id == null) {
            throw new ForbiddenException('Credentials Not According to DTO');
        }
        const jeu = await this.prisma.jeu.update({
            where: {
                id: Number(id),
            },
            data: {
                nom: dto.nom,
                type_jeu: {
                    connect: {
                        label: dto.type_jeu.label,
                    },
                },
            },
        });
    }

    async deleteOne(id: number) {
        try {
            const jeu = await this.prisma.jeu.delete({
                where: {
                    id: Number(id),
                },
            });
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
}

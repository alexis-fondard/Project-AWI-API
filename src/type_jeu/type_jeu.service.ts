import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeJeuDto } from './dto';

@Injectable()
export class TypeJeuService {
  constructor(private prisma: PrismaService) {}

  async create(dto: TypeJeuDto) {
    const typeJeu = await this.prisma.type_Jeu.create({
      data: {
        label: dto.label,
      },
    });
    //return to user the saved typeJeu
    return typeJeu;
  }

  async findAll() {
    const typeJeux = await this.prisma.type_Jeu.findMany({});
    return typeJeux;
  }

  async findOne(label: string) {
    const typeJeu = await this.prisma.type_Jeu.findFirst({
      where: {
        label: label,
      },
    });
    return typeJeu;
  }

  async updateOne(label: string, dto: TypeJeuDto) {
    console.log(dto);

    if (label == null) {
      throw new ForbiddenException('Credentials Not According to DTO');
    }
    const typeJeu = await this.prisma.type_Jeu.update({
      where: {
        label: label,
      },
      data: {
        label: dto.label,
      },
    });
    return typeJeu;
  }

  async deleteOne(label: string) {
    const typeJeu = await this.prisma.type_Jeu.delete({
      where: {
        label: label,
      },
    });
    return typeJeu;
  }
}

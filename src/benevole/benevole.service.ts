import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { BenevoleDto } from './dto';

@Injectable()
export class BenevoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: BenevoleDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const benevole = await this.prisma.benevole.create({
      data: {
        prenom: dto.prenom,
        nom: dto.nom,
        email: dto.email,
      },
    });
    //return to user the saved benevole
    return benevole;

    /* try {
      
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }*/
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const benevoles = await this.prisma.benevole.findMany({});
    return benevoles;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const benevole = await this.prisma.benevole.findFirst({
      where: {
        id: Number(id),
      },
    });
    return benevole;
  }

  async updateOne(id: number, dto: BenevoleDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    if (id == null) {
      throw new ForbiddenException('Credentials Not According to DTO');
    }
    const benevole = await this.prisma.benevole.update({
      where: {
        id: Number(id),
      },
      data: {
        prenom: dto.prenom,
        nom: dto.nom,
        email: dto.email,
      },
    });
    return benevole;
  }

  async deleteOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    try {
      const benevole = await this.prisma.benevole.delete({
        where: {
          id: Number(id),
        },
      });
      return benevole;
    } catch (error) {
      //TODO
      //PERSONALISATION DES ERREURS
      throw new ForbiddenException('TO DO IMPLEMENT RIGHT ERROR');
      /*
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('TO DO IMPLEMENT RIGHT ERROR');
        }
      }
      throw error;
      */
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { BenevoleDto } from './dto';

@Injectable()
export class BenevoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: BenevoleDto) {
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

  async findAll(){
    const benevoles = await this.prisma.benevole.findMany({});
    return benevoles;
  }
}

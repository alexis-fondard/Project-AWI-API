/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { BenevoleDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class BenevoleService {
  constructor(private prisma: PrismaService) {}

  // async create(dto: BenevoleDto) {
  //   //TODO: TRY CATCH (RIGHT ERROR)
  //   try {
  //     const benevole = await this.prisma.benevole.create({
  //       data: {
  //         prenom: dto.prenom,
  //         nom: dto.nom,
  //         email: dto.email,
  //         mdp: dto.email,
  //         isAdmin: dto.isAdmin,
  //       },
  //     });
  //     //return to user the saved benevole
  //     return benevole;
  //   } catch (error) {
  //     if (error instanceof PrismaClientKnownRequestError) {
  //       if (error.code === 'P2002') {
  //         throw new ForbiddenException('Credentials taken');
  //       }
  //     }
  //     throw error;
  //   }
  // }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const benevoles = await this.prisma.benevole.findMany({
      select: {
        id: true,
        prenom: true,
        nom: true,
        email: true,
        isAdmin: true
      }
    },
    );
    return benevoles;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const benevole = await this.prisma.benevole.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        prenom: true,
        nom: true,
        email: true,
        isAdmin: true
      }
    });
    return benevole;
  }

  async updateOne(id: number, dto: BenevoleDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    if (id == null) {
      throw new ForbiddenException('Credentials Not According to DTO');
    }
    
    const dataToSend = {
      prenom: dto.prenom,
      nom: dto.nom,
      email: dto.email,
      isAdmin: dto.isAdmin
    }

    if(dto.mdp != null){
      const hash = await argon.hash(String(dto.mdp))
      dataToSend["mdp"] = hash
    }

    const benevole = await this.prisma.benevole.update({
      where: {
        id: Number(id),
      },
      data: dataToSend,
      select: {
        id: true,
        prenom: true,
        nom: true,
        email: true,
        isAdmin: true
      }
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
        select: {
          id: true,
          prenom: true,
          nom: true,
          email: true,
          isAdmin: true
        }
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

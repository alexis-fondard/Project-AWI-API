/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AffectationCreneauDto } from './dto';

@Injectable()
export class AffectationCreneauService {
  constructor(private prisma: PrismaService) {}

  async create(dto: AffectationCreneauDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const affectation_creneau = await this.prisma.affectationCreneau.create({
      data: {
        id_festivalZone: Number(dto.id_festivalZone),
        id_creneau: Number(dto.id_creneau),
        id_benevole: Number(dto.id_benevole),
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });
    return affectation_creneau;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const affectation_creneaux = await this.prisma.affectationCreneau.findMany({select: {
      creneau:true,
      benevole:true,
      festivalZone:true
    }});

    return affectation_creneaux;
  }

  async findOne(id_creneau: number, id_benevole: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const affectation_creneau = await this.prisma.affectationCreneau.findFirst({
      where: {
        id_creneau: Number(id_creneau),
        id_benevole: Number(id_benevole)
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });

    return affectation_creneau;
  }

  async updateOne(id_creneau: number, id_benevole: number, dto: AffectationCreneauDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const donnee = {
      id_creneau: Number(dto.id_creneau),
      id_benevole: Number(dto.id_benevole),
      id_festivalZone: Number(dto.id_festivalZone),
    };

    const affectation_creneau = await this.prisma.affectationCreneau.update({
      where: {
        id_creneau_id_benevole:{
          id_creneau: Number(id_creneau),
          id_benevole: Number(id_benevole),
        }
      },
      data: donnee,
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });

    return affectation_creneau;
  }

  async deleteOne(id_creneau: number, id_benevole: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const affectation_creneau = await this.prisma.affectationCreneau.delete({
      where: {
        id_creneau_id_benevole:{
          id_creneau: Number(id_creneau),
          id_benevole: Number(id_benevole)
        }
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });

    return affectation_creneau;
  }

  async findAllAffectationOfOneBenevole(id: number) {
    const affectation_creneaux = await this.prisma.affectationCreneau.findMany({
      where: {
        id_benevole: Number(id),
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });
    return affectation_creneaux;
  }

  async findAllAffectationOfOneFZ(id: number){
    const affectation_creneaux = await this.prisma.affectationCreneau.findMany({
      where: {
        id_festivalZone: Number(id),
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });
    return affectation_creneaux;
  }

  async findAllAffectationOfOneCreneau(id: number){
    const affectation_creneaux = await this.prisma.affectationCreneau.findMany({
      where: {
        id_creneau: Number(id),
      },
      select: {
        creneau:true,
        benevole:true,
        festivalZone:true
      }
    });
    return affectation_creneaux;
  }
}

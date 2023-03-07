import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JeuZoneDTO } from './dto';

@Injectable()
export class JeuZoneService {
  constructor(private prisma: PrismaService) {}

  async getAllJeuxOfAZone(label: string) {
    const jeux = await this.prisma.jeu_Zone.findMany({
      where: {
        zone: {
          label: label,
        },
      },
      select: {
        jeu: true,
      },
    });
    return jeux;
    //return 'must do it';
  }

  async getAllZonesOfAJeux(id: number) {
    const zones = await this.prisma.jeu_Zone.findMany({
      where: {
        jeu: {
          id: Number(id),
        },
      },
      select: {
        zone: true,
      },
    });
    return zones;
  }

  async getAll() {
    const jeux_zones = await this.prisma.jeu_Zone.findMany({
      select: {
        jeu: true,
        zone: true,
      },
    });
    return jeux_zones;
  }

  async getAllAffectationOfAJeu(string_id: number) {
    const id = Number(string_id);

    const jeux_zones = await this.prisma.jeu_Zone.findMany({
      where: {
        id_jeu: id,
      },
    });

    return jeux_zones;
  }

  async deleteAffectationOfAJeu(dto: JeuZoneDTO) {
    const jeu_Zone = await this.prisma.jeu_Zone.delete({
        where: {
            label_zone_id_jeu: {
                id_jeu: Number(dto.jeu.id),
                label_zone: dto.zone.label,
            }
        },
    });
    return jeu_Zone;
  }

  async createAffectationOfAJeu(dto: JeuZoneDTO) {
    console.log(dto);

    const jeu_Zone = await this.prisma.jeu_Zone.create({
      data: {
        id_jeu: dto.jeu.id,
        label_zone: dto.zone.label,
      },
    });
    return jeu_Zone;
  }
}

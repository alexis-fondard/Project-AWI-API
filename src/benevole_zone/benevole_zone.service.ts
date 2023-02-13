import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BenevoleZoneDTO } from './dto';

@Injectable()
export class BenevoleZoneService {
  constructor(private prisma: PrismaService) {}

  async getAllBenevolesOfAZone(label: string) {
    const benevoles = await this.prisma.benevole_Zone.findMany({
      where: {
        zone: {
          label: label,
        },
      },
      select: {
        benevole: true,
      },
    });
    return benevoles;
    //return 'must do it';
  }

  async getAllZonesOfABenevoles(id: number) {
    const zones = await this.prisma.benevole_Zone.findMany({
      where: {
        benevole: {
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
    const benevoles_zones = await this.prisma.benevole_Zone.findMany({});
    return benevoles_zones;
  }

  async getAllAffectationOfABenevole(string_id: number) {
    const id = Number(string_id);

    const benevoles_zones = await this.prisma.benevole_Zone.findMany({
      where: {
        id_benevole: id,
      },
    });

    return benevoles_zones;
  }

  // eslint-disable-next-line prettier/prettier
  async getAllBenevolesZonesOfCreneau(debut: number, fin: number) {
    const date_debut = new Date(Number(debut));
    const date_fin = new Date(Number(fin));

    const benevoles = await this.prisma.benevole_Zone.findMany({
      where: {
        debut: date_debut,
        fin: date_fin,
      },
      select: {
        benevole: true,
        zone: true,
      },
    });

    return benevoles;
  }

  async getAllBenevolesCreneauOfZone(zone: string) {
    const benevoles = await this.prisma.benevole_Zone.findMany({
      where: {
        zone: {
          label: zone,
        },
      },
      select: {
        benevole: true,
        zone: true,
      },
    });

    return benevoles;
  }

  async deleteAffecationOfABenevole(dto: BenevoleZoneDTO) {
    const benevole_Zone = await this.prisma.benevole_Zone.delete({
      where: {
        id_benevole_label_zone_debut: {
          id_benevole: Number(dto.benevole.id),
          label_zone: dto.zone.label,
          debut: dto.date_debut,
        },
      },
    });
    return benevole_Zone;
  }

  async createAffecationOfABenevole(dto: BenevoleZoneDTO) {
    dto.date_debut = new Date(dto.date_debut);
    dto.date_fin = new Date(dto.date_fin);

    if (await this.isAlreadyTaken(dto.date_debut, dto.date_fin, dto)) {
      throw new ForbiddenException(
        "TO DO IMPLEMENT RIGHT ERROR : CAN'T IMPLEMENT BECAUSE ALREADY CRENEAU DURING THIS TIME",
      );
    }

    const benevole_Zone = await this.prisma.benevole_Zone.create({
      data: {
        id_benevole: dto.benevole.id,
        label_zone: dto.zone.label,
        debut: dto.date_debut,
        fin: dto.date_fin,
      },
    });
    return benevole_Zone;
  }

  async updateOne(timestamp: number, dto: BenevoleZoneDTO) {
    return 'deprecated, do not use !';

    const ancienne_date = new Date(Number(timestamp));
    console.log(ancienne_date);
    dto.date_debut = new Date(dto.date_debut);
    dto.date_fin = new Date(dto.date_fin);

    const test = await this.prisma.benevole_Zone.findFirst({
      where: {
        id_benevole: Number(dto.benevole.id),
        label_zone: dto.zone.label,
        debut: ancienne_date,
      },
    });

    if (test == null) {
      throw new ForbiddenException('PREVIOUS CRENEAU DOESN T EXIST');
    }

    const isAlreadyTaken = await this.isAlreadyTaken(
      dto.date_debut,
      dto.date_fin,
      dto,
    );
    if (isAlreadyTaken) {
      throw new ForbiddenException(
        "TO DO IMPLEMENT RIGHT ERROR : CAN'T IMPLEMENT BECAUSE ALREADY CRENEAU DURING THIS TIME",
      );
    }

    const benevole_Zone = this.prisma.benevole_Zone.update({
      where: {
        id_benevole_label_zone_debut: {
          id_benevole: Number(dto.benevole.id),
          label_zone: dto.zone.label,
          debut: ancienne_date,
        },
      },
      data: {
        id_benevole: dto.benevole.id,
        label_zone: dto.zone.label,
        debut: dto.date_debut,
        fin: dto.date_fin,
      },
    });
    return benevole_Zone;
  }

  async isAlreadyTaken(date_debut: Date, date_fin: Date, dto: BenevoleZoneDTO) {
    const already_benevoles = await this.prisma.benevole_Zone.findMany({
      where: {
        OR: [
          {
            id_benevole: Number(dto.benevole.id),
            label_zone: dto.zone.label,
            debut: {
              gte: date_debut,
              lte: date_fin,
            },
            fin: {
              gte: date_fin,
            },
          },
          {
            id_benevole: Number(dto.benevole.id),
            label_zone: dto.zone.label,
            debut: {
              lte: date_debut,
            },
            fin: {
              gte: date_debut,
              lte: date_fin,
            },
          },
          {
            id_benevole: Number(dto.benevole.id),
            label_zone: dto.zone.label,
            debut: {
              gte: date_debut,
              lte: date_fin,
            },
            fin: {
              gte: date_debut,
              lte: date_fin,
            },
          },
        ],
      },
    });

    return already_benevoles.length != 0;
  }
}

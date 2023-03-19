import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreneauDto } from './dto';

@Injectable()
export class CreneauService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreneauDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const creneau = await this.prisma.creneau.create({
      data: {
        id_jour: Number(dto.id_jour),
        heureDebut: Number(dto.heureDebut),
        heureFin: Number(dto.heureFin),
        minuteDebut: Number(dto.minuteDebut),
        minuteFin: Number(dto.minuteFin),
      },
    });
    return creneau;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const creneaux = await this.prisma.creneau.findMany({});

    return creneaux;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const creneau = await this.prisma.creneau.findFirst({
      where: {
        id: Number(id),
      },
    });

    return creneau;
  }

  async updateOne(id: number, dto: CreneauDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const donnee = {
      id_jour: Number(dto.id_jour),
      heureDebut: Number(dto.heureDebut),
      heureFin: Number(dto.heureFin),
      minuteDebut: Number(dto.minuteDebut),
      minuteFin: Number(dto.minuteFin),
    };

    const creneau = await this.prisma.creneau.update({
      where: {
        id: Number(id),
      },
      data: donnee,
    });

    return creneau;
  }

  async deleteOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const creneau = await this.prisma.creneau.delete({
      where: {
        id: Number(id),
      },
    });

    return creneau;
  }

  async findAllCreneauxOfOneJour(id: number) {
    const creneaux = await this.prisma.creneau.findMany({
      where: {
        id_jour: Number(id),
      },
    });
    return creneaux;
  }
}

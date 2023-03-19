import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JourDto } from './dto';

@Injectable()
export class JourService {
  constructor(private prisma: PrismaService) {}

  async create(dto: JourDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const jour = await this.prisma.jour.create({
      data: {
        id_festival: Number(dto.id_festival),
        nom: String(dto.nom),
        date: new Date(dto.date),
        heureOuverture: Number(dto.heureOuverture),
        heureFermeture: Number(dto.heureFermeture),
        minuteOuverture: Number(dto.minuteOuverture),
        minuteFermeture: Number(dto.minuteFermeture),
      },
    });
    return jour;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const jours = await this.prisma.jour.findMany({});

    return jours;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const jour = await this.prisma.jour.findFirst({
      where: {
        id: Number(id),
      },
    });

    return jour;
  }

  async updateOne(id: number, dto: JourDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const donnee = {
      id_festival: Number(dto.id_festival),
      nom: String(dto.nom),
      date: new Date(dto.date),
      heureOuverture: Number(dto.heureOuverture),
      heureFermeture: Number(dto.heureFermeture),
      minuteOuverture: Number(dto.minuteOuverture),
      minuteFermeture: Number(dto.minuteFermeture),
    };

    const jour = await this.prisma.jour.update({
      where: {
        id: Number(id),
      },
      data: donnee,
    });

    return jour;
  }

  async deleteOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const jour = await this.prisma.jour.delete({
      where: {
        id: Number(id),
      },
    });

    return jour;
  }

  async findAllJoursOfOneFestival(id: number) {
    const jours = await this.prisma.jour.findMany({
      where: {
        id_festival: Number(id),
      },
    });
    return jours;
  }
}

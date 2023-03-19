import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FestivalDto } from './dto';

@Injectable()
export class FestivalService {
  constructor(private prisma: PrismaService) {}

  async create(dto: FestivalDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival = await this.prisma.festival.create({
      data: {
        nom: dto.nom,
        annee: dto.annee,
        isActive: dto.isActive,
      },
    });
    return festival;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festivals = await this.prisma.festival.findMany({});

    return festivals;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival = await this.prisma.festival.findFirst({
      where: {
        id: Number(id),
      },
    });

    return festival;
  }

  async updateOne(id: number, dto: FestivalDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const donnee = {
      nom: String(dto.nom),
      annee: Number(dto.annee),
      isActive: dto.isActive,
    };

    const festival = await this.prisma.festival.update({
      where: {
        id: Number(id),
      },
      data: donnee,
    });

    return festival;
  }

  async deleteOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival = await this.prisma.festival.delete({
      where: {
        id: Number(id),
      },
    });

    return festival;
  }

}

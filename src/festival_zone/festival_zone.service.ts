/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FestivalZoneDto } from './dto';

@Injectable()
export class FestivalZoneService {
  constructor(private prisma: PrismaService) {}

  async create(dto: FestivalZoneDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const already_exist = await this.prisma.festivalZone.count({
      where: {
        id_festival: Number(dto.id_festival),
        label_zone: String(dto.label_zone),
      },
    });

    if(Number(already_exist) != 0){
      throw new ForbiddenException(
        "Cannot create, already exist",
      );
    }

    const festival_zone = await this.prisma.festivalZone.create({
      data: {
        id_festival: Number(dto.id_festival),
        label_zone: String(dto.label_zone),
        nbBenevolesNecessaires: Number(dto.nbBenevolesNecessaires),
      },
    });
    return festival_zone;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival_zones = await this.prisma.festivalZone.findMany({});

    return festival_zones;
  }

  async findOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival_zone = await this.prisma.festivalZone.findFirst({
      where: {
        id_festivalZone: Number(id),
      },
    });

    return festival_zone;
  }

  async updateOne(id: number, dto: FestivalZoneDto) {
    //TODO: TRY CATCH (RIGHT ERROR)

    const donnee = {
      id_festival: Number(dto.id_festival),
      label_zone: String(dto.label_zone),
      nbBenevolesNecessaires: Number(dto.nbBenevolesNecessaires),
    };

    const festival_zone = await this.prisma.festivalZone.update({
      where: {
        id_festivalZone: Number(id),
      },
      data: donnee,
    });

    return festival_zone;
  }

  async deleteOne(id: number) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const festival_zone = await this.prisma.festivalZone.delete({
      where: {
        id_festivalZone: Number(id),
      },
    });

    return festival_zone;
  }

  async findAllFZOfOneFestival(id: number) {
    const festival_zones = await this.prisma.festivalZone.findMany({
      where: {
        id_festival: Number(id),
      },
    });
    return festival_zones;
  }

  async findAllFZOfOneZone(label: string){
    const festival_zones = await this.prisma.festivalZone.findMany({
      where: {
        label_zone: String(label),
      },
    });
    return festival_zones;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZoneDto } from './dto';

@Injectable()
export class ZoneService {
  constructor(private prisma: PrismaService) {}

  async create(dto: ZoneDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const zone = await this.prisma.zone.create({
      data: {
        label: dto.label,
      },
    });
    return zone;
  }

  async findAll() {
    //TODO: TRY CATCH (RIGHT ERROR)
    const zones = await this.prisma.zone.findMany({});

    return zones;
  }

  async findOne(label: string) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const zone = await this.prisma.zone.findFirst({
      where: {
        label: label,
      },
    });

    return zone;
  }

  async updateOne(past_label: string, dto: ZoneDto) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const zone = await this.prisma.zone.update({
      where: {
        label: past_label,
      },
      data: {
        label: dto.label,
      },
    });

    return zone;
  }

  async deleteOne(label: string) {
    //TODO: TRY CATCH (RIGHT ERROR)
    const zone = await this.prisma.zone.delete({
      where: {
        label: label,
      },
    });

    return zone;
  }
}

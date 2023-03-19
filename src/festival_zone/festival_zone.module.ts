import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FestivalZoneService } from './festival_zone.service';
import { FestivalZoneController } from './festival_zone.controller';

@Module({
  imports: [PrismaModule],
  providers: [FestivalZoneService],
  controllers: [FestivalZoneController],
})
export class FestivalZoneModule {}

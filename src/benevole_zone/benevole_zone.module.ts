import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BenevoleZoneController } from './benevole_zone.controller';
import { BenevoleZoneService } from './benevole_zone.service';

@Module({
  providers: [BenevoleZoneService],
  controllers: [BenevoleZoneController],
  imports: [PrismaModule],
})
export class BenevoleZoneModule {}

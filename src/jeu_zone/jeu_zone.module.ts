import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JeuZoneController } from './jeu_zone.controller';
import { JeuZoneService } from './jeu_zone.service';

@Module({
  providers: [JeuZoneService],
  controllers: [JeuZoneController],
  imports: [PrismaModule],
})
export class JeuZoneModule {}

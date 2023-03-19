import { Module } from '@nestjs/common';
import { AffectationCreneauService } from './affectation_creneau.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AffectationCreneauController } from './affectation_creneau.controller';

@Module({
  imports: [PrismaModule],
  providers: [AffectationCreneauService],
  controllers: [AffectationCreneauController],
})
export class AffectationCreneauModule {}

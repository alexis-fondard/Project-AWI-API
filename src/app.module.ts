import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BenevoleModule } from './benevole/benevole.module';
import { JeuModule } from './jeu/jeu.module';
import { ZoneModule } from './zone/zone.module';
import { BenevoleZoneModule } from './benevole_zone/benevole_zone.module';
import { TypeJeuModule } from './type_jeu/type_jeu.module';
import { JeuZoneModule } from './jeu_zone/jeu_zone.module';
import { AuthMobileModule } from './authMobile/auth.module';
import { FestivalModule } from './festival/festival.module';
import { JourModule } from './jour/jour.module';
import { CreneauModule } from './creneau/creneau.module';
import { FestivalZoneModule } from './festival_zone/festival_zone.module';
import { AffectationCreneauModule } from './affectation_creneau/affectation_creneau.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    AuthMobileModule,
    PrismaModule,
    BenevoleModule,
    JeuModule,
    ZoneModule,
    BenevoleZoneModule,
    TypeJeuModule,
    JeuZoneModule,
    FestivalModule,
    JourModule,
    CreneauModule,
    FestivalZoneModule,
    AffectationCreneauModule
  ],
})
export class AppModule {}

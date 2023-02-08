import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BenevoleModule } from './benevole/benevole.module';
import { JeuModule } from './jeu/jeu.module';
import { ZoneModule } from './zone/zone.module';
import { BenevoleZoneModule } from './benevole_zone/benevole_zone.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    BenevoleModule,
    JeuModule,
    ZoneModule,
    BenevoleZoneModule,
  ],
})
export class AppModule {}

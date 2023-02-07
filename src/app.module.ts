import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BenevoleModule } from './benevole/benevole.module';
import { JeuModule } from './jeu/jeu.module';
import { ZoneModule } from './zone/zone.module';

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
  ],
})
export class AppModule {}

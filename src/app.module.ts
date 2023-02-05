import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BenevoleModule } from './benevole/benevole.module';
import { JeuModule } from './jeu/jeu.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    BenevoleModule,
    JeuModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JeuController } from './jeu.controller';
import { JeuService } from './jeu.service';

@Module({
  imports: [PrismaModule],
  controllers: [JeuController],
  providers: [JeuService]
})
export class JeuModule {}

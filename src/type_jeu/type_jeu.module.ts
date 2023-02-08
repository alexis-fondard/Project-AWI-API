import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TypeJeuController } from './type_jeu.controller';
import { TypeJeuService } from './type_jeu.service';

@Module({
  imports: [PrismaModule],
  controllers: [TypeJeuController],
  providers: [TypeJeuService],
})
export class TypeJeuModule {}

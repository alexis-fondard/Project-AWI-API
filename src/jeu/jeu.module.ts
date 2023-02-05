import { Module } from '@nestjs/common';
import { JeuService } from './jeu.service';

@Module({
  providers: [JeuService]
})
export class JeuModule {}

import { Jeu, Zone } from '@prisma/client';
import { IsNotEmpty, IsObject } from 'class-validator';

export class JeuZoneDTO {
  @IsObject()
  @IsNotEmpty()
  zone: Zone;

  @IsObject()
  @IsNotEmpty()
  jeu: Jeu;
}
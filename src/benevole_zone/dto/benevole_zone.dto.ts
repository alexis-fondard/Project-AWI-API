import { Benevole, Zone } from '@prisma/client';
import { IsDate, IsNotEmpty, IsObject } from 'class-validator';

export class BenevoleZoneDTO {
  @IsObject()
  @IsNotEmpty()
  zone: Zone;

  @IsObject()
  @IsNotEmpty()
  benevole: Benevole;

  @IsDate()
  @IsNotEmpty()
  date_debut: Date;

  @IsDate()
  @IsNotEmpty()
  date_fin: Date;
}

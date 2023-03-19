/* eslint-disable prettier/prettier */
import { Festival, Zone } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsObject } from "class-validator";

export class FestivalZoneDto {

    @IsObject()
    @IsNotEmpty()
    id_festival : number;

    @IsObject()
    @IsNotEmpty()
    label_zone : string;

    @IsNumber()
    @IsNotEmpty()
    nbBenevolesNecessaires : number;
    
}

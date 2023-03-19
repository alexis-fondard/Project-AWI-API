/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsObject } from "class-validator";

export class AffectationCreneauDto {

    @IsObject()
    @IsNotEmpty()
    id_benevole : number;

    @IsObject()
    @IsNotEmpty()
    id_festivalZone : number;

    @IsNumber()
    @IsNotEmpty()
    id_creneau: number;
    
}

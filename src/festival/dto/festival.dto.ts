/* eslint-disable prettier/prettier */

import {IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";




export class FestivalDto {

    @IsString()
    @IsNotEmpty()
    nom : string;

    @IsNumber()
    @IsNotEmpty()
    annee : number;

    @IsBoolean()
    @IsNotEmpty()
    isActive : boolean;
    
}

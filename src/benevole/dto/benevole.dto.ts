/* eslint-disable prettier/prettier */

import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";




export class BenevoleDto {


    @IsString()
    @IsNotEmpty()
    prenom: string;
    
    @IsString()
    @IsNotEmpty()
    nom: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    mdp: string;

    @IsBoolean()
    @IsNotEmpty()
    isAdmin: boolean;
    
}

/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from "class-validator";




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
    
}

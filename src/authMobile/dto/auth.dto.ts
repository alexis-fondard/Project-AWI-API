/* eslint-disable prettier/prettier */

import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";




export class AuthMobileDto {
    @IsString()
    @IsNotEmpty()
    prenom;

    @IsString()
    @IsNotEmpty()
    nom;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsBoolean()
    isAdmin: boolean;
}

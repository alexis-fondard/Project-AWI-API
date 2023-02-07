/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";




export class ZoneDto {


    @IsString()
    @IsNotEmpty()
    label: string;
    
}

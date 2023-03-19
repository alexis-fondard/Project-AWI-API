/* eslint-disable prettier/prettier */

import {IsNotEmpty, IsNumber  } from "class-validator";

export class CreneauDto {

  @IsNotEmpty()
  @IsNumber()
  id_jour 

  @IsNotEmpty()
  @IsNumber()
  heureDebut 
  
  @IsNotEmpty()
  @IsNumber()
  minuteDebut 

  @IsNotEmpty()
  @IsNumber()
  heureFin 

  @IsNotEmpty()
  @IsNumber()
  minuteFin 
    
}

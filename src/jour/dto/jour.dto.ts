/* eslint-disable prettier/prettier */

import { IsDate, IsNotEmpty, IsNumber, IsString,  } from "class-validator";




export class JourDto {

  @IsNotEmpty()
  @IsNumber()
  id_festival 

  @IsNotEmpty()
  @IsDate()
  date 

  @IsString()
  @IsNotEmpty()
  nom 

  @IsNotEmpty()
  @IsNumber()
  heureOuverture 
  
  @IsNotEmpty()
  @IsNumber()
  minuteOuverture 

  @IsNotEmpty()
  @IsNumber()
  heureFermeture 

  @IsNotEmpty()
  @IsNumber()
  minuteFermeture 
    
}

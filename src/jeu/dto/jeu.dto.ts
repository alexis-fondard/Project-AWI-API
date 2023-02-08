import { IsNotEmpty, IsString } from "class-validator";
import { TypeJeuDto } from "../../type_jeu/dto/type_jeu.dto";

export class JeuDto {

    @IsString()
    @IsNotEmpty()
    nom: string;

    type_jeu: TypeJeuDto;
}

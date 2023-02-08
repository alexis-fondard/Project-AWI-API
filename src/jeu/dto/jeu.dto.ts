import { IsNotEmpty, IsString } from "class-validator";
import { TypeJeu } from "../../type_jeu/dto/type_jeu.dto";

export class JeuDto {

    @IsString()
    @IsNotEmpty()
    nom: string;

    idType: TypeJeu;
}

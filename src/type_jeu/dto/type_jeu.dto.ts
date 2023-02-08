import { IsNotEmpty, IsString } from "class-validator";

export class TypeJeuDto {
    @IsString()
    @IsNotEmpty()
    label: string;
}

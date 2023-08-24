import { IsEmail, IsString, MinLength } from "class-validator";



export class CriaUsuarioDTO {
    
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    senha: string;
}
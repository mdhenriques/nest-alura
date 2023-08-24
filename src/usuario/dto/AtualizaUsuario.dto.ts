import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-e-unico.validator";



export class AtualizaUsuarioDTO {
    
    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsEmail()
    @EmailEhUnico({ message: 'Ja existe um usuario com esse email'})
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    senha: string;
}
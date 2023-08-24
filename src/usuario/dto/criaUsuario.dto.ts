import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-e-unico.validator";



export class CriaUsuarioDTO {
    
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @EmailEhUnico({ message: 'Ja existe um usuario com esse email'})
    email: string;

    @MinLength(6)
    senha: string;
}
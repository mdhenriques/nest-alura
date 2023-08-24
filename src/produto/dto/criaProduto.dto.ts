import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CriaProdutoDTO {

    @IsNumber()
    id: number;

    @IsNotEmpty()
    nomeDoProduto: string;

    @IsNumberString()
    preco: string;
}
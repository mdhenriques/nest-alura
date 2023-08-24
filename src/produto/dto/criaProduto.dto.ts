import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsPositive, Length, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {

    @IsNotEmpty()
    nome: string;

    @IsNumberString()    
    @Length(1, 2)
    valor: string;

    @IsInt()
    @Min(0)
    quantidade: number;

    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @IsNotEmpty()
    categoria: string;
}
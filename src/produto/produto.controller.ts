import { Controller, Body, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/criaProduto.dto";


@Controller('/produtos')
export class ProdutoController{
    
    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar();
    }
}
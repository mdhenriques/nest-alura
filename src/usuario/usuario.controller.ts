import { Get, Body, Controller, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository) {}

   @Post() 
   async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;  
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return { 
          id: usuarioEntity.id,
          message: 'usuario criado com sucesso'
        }  
   } 

   @Get()
   async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
          usuario => new ListaUsuarioDTO(
               usuario.id,
               usuario.nome
          )
        );

        return usuariosLista;
   }
}

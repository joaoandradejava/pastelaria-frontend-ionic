import { Component } from '@angular/core';
import { UsuarioAutenticado } from './shared/models/usuario-autenticado';
import { AutenticacaoService } from './shared/services/autenticacao.service';
import { Rota } from './shared/utils/rota';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rotas: Rota[] = [
    {nome: 'Tela inicial', url: '/', icone: 'home-outline'},
  ]

  rotasNaoAutenticadas: Rota[] = [
    {nome: 'Entrar', url: '/login', icone: 'key-outline'},
    {nome: 'Cadastrar-se', url: '/cadastro-usuario', icone: 'person-add-outline'}
  ]

  rotasAutenticadas: Rota[] = [
    {nome: 'Atualizar dados', url: 'atualizar-dados', icone: 'pencil-outline'},
    {nome: 'Meus Endereços', url: 'meus-enderecos', icone: 'locate-outline'},
    {nome: 'Meu Carrinho de Compras', url: 'carrinho-de-compras', icone: 'cart-sharp'},
    {nome: 'Meus Pedidos', url: 'meus-pedidos', icone: 'clipboard-outline'},
    {nome: 'Deletar Conta', url: 'deletar-conta', icone: 'trash'}

  ]

  constructor(private autenticacaoService: AutenticacaoService) {}

  public isLogado(): boolean{
    return this.autenticacaoService.isLogado()? true : false
  }

  public getUsuarioAutenticado(): UsuarioAutenticado{
    return this.autenticacaoService.getUsuarioAutenticado()
  }

  public sair(): void {
    this.autenticacaoService.deslogar()
  }
}

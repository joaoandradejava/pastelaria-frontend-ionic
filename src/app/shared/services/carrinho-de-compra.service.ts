import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';
import { ItemCarrinho } from './../models/item-carrinho';
import { Carrinho } from './../models/carrinho';
import { ProdutoModel } from './../models/produto-model';
import { Injectable } from '@angular/core';
import { TipoMensagem } from '../models/tipo-mensagem';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoDeCompraService {
  constructor(private autenticacaoService: AutenticacaoService, private router: Router, private toastService: ToastService) {}

  public adicionarItemNoCarrinho(produto: ProdutoModel): void {
    if(!this.autenticacaoService.isLogado()){
      this.router.navigate(['/login'])
      this.toastService.exibirMensagem('Para adicionar no carrinho é necessario estar logado no sistema!', 5000, TipoMensagem.ALERTA)

      return
    }

    let itemCarrinho: ItemCarrinho =
      this.transformarProdutoEmItemCarrinho(produto);

    if (!this.isTemCarrinho()) {
      let carrinho: Carrinho = new Carrinho();
      carrinho.adicionarItemNoCarrinho(itemCarrinho);
      this.salvarCarrinho(carrinho);

    }else{

    let carrinho: Carrinho = this.buscarCarrinho();
    carrinho.adicionarItemNoCarrinho(itemCarrinho);
    this.salvarCarrinho(carrinho);
    }

    this.toastService.exibirMensagem('Produto adicionado no carrinho!', 5000, TipoMensagem.SUCESSO)
  }

  private transformarProdutoEmItemCarrinho(
    produto: ProdutoModel
  ): ItemCarrinho {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho();
    itemCarrinho.id = produto.id;
    itemCarrinho.nome = produto.nome;
    itemCarrinho.preco = produto.preco;
    itemCarrinho.quantidade = 1;

    return itemCarrinho;
  }

  public isTemCarrinho(): boolean {
    return localStorage.getItem('carrinho') == null ? false : true;
  }

  public salvarCarrinho(carrinho: Carrinho): void {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  public buscarCarrinho(): Carrinho {
    if (this.isTemCarrinho()) {
      let dado = JSON.parse(localStorage.getItem('carrinho'));
      let carrinho: Carrinho = new Carrinho();
      carrinho.itens = dado.itens;

      return carrinho;
    }

    return null;
  }

  public diminuirQuantidade(item: ItemCarrinho): void {
    let carrinho: Carrinho = this.buscarCarrinho()
    carrinho.diminuirQuantidade(item)
    if(carrinho.itens.length <= 0){
      this.limparCarrinho()
      return
    }
    this.salvarCarrinho(carrinho)
  }

  public aumentarQuantidade(item: ItemCarrinho): void {
    let carrinho: Carrinho = this.buscarCarrinho()
    carrinho.aumentarQuantidade(item)
    this.salvarCarrinho(carrinho)

  }

  public limparCarrinho(): void {
    localStorage.removeItem('carrinho')
  }
}

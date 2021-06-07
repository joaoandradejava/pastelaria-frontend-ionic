import { CarrinhoDeCompraService } from './../../shared/services/carrinho-de-compra.service';
import { CategoriaService } from './../../shared/services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto-model';
import { ProdutoPaginationModel } from 'src/app/shared/models/produto-pagination-model';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CategoriaModel } from 'src/app/shared/models/categoria-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  produtoPaginationModel: ProdutoPaginationModel;
  produtos: ProdutoModel[] = [];
  paginaAtual: number = 0;
  tamanho: number = 10;

  categorias: CategoriaModel[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoDeCompraService
  ) {}

  ngOnInit(): void {
    this.buscarProdutos();
    this.buscarCategorias()
  }

  buscarCategorias(): void {
    this.categoriaService.buscarTodas().subscribe(data => {
      this.categorias = data
    })
   }


   public addCarrinho(produto: ProdutoModel): void {
    this.carrinhoService.adicionarItemNoCarrinho(produto)
   }

  buscarProdutos(): void {
    this.produtoService
      .buscarTodosDisponivelDoEstoque(this.paginaAtual, this.tamanho)
      .subscribe((data) => {
        this.produtoPaginationModel = data;
        this.produtoPaginationModel.content.forEach((produto) => {
          this.produtos.push(produto);
        });
      });
  }

  loadData(event) {
    this.paginaAtual++;
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.buscarProdutos();

      if (this.produtos.length == this.produtoPaginationModel.totalElements) {
        event.target.disabled = true;
      }
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    }, 1000);
  }
}

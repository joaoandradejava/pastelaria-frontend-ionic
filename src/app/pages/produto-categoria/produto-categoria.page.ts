import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from 'src/app/shared/models/categoria-model';
import { ProdutoModel } from 'src/app/shared/models/produto-model';
import { ProdutoPaginationModel } from 'src/app/shared/models/produto-pagination-model';
import { CarrinhoDeCompraService } from 'src/app/shared/services/carrinho-de-compra.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-categoria',
  templateUrl: './produto-categoria.page.html',
  styleUrls: ['./produto-categoria.page.scss'],
})
export class ProdutoCategoriaPage implements OnInit {
  categoriaModel: CategoriaModel;
  paginaAtual: number = 0;
  tamanho: number = 10;
  produtoPaginationModel: ProdutoPaginationModel;
  produtos: ProdutoModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoDeCompraService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.route.params.subscribe((data) => {
      this.categoriaService.buscarPorId(data.id).subscribe((categoria) => {
        this.categoriaModel = categoria;
        this.buscarProdutos();
      });
    });
  }

  public addCarrinho(produto: ProdutoModel): void {
    this.carrinhoService.adicionarItemNoCarrinho(produto);
  }

  buscarProdutos(): void {
    this.produtoService
      .buscarTodosDisponivelPorCategoria(
        this.categoriaModel.id,
        this.paginaAtual,
        this.tamanho
      )
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
    }, 500);
  }
}

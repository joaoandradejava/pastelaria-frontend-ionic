import { ProdutoModel } from './../../shared/models/produto-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CarrinhoDeCompraService } from 'src/app/shared/services/carrinho-de-compra.service';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.page.html',
  styleUrls: ['./produto-item.page.scss'],
})
export class ProdutoItemPage implements OnInit {
  produtoModel: ProdutoModel;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoDeCompraService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.produtoService.buscarPorId(data.id).subscribe((produto) => {
        this.produtoModel = produto;
      });
    });
  }

  public addCarrinho(): void {
    this.carrinhoService.adicionarItemNoCarrinho(this.produtoModel);
  }
}

import { Component, OnInit } from '@angular/core';
import { PedidoModel } from 'src/app/shared/models/pedido-model';
import { PedidoPaginationModel } from 'src/app/shared/models/pedido-pagination-model';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage implements OnInit {
  pedidoPaginationModel: PedidoPaginationModel;
  pedidos: PedidoModel[] = [];
  paginaAtual: number = 0;
  tamanho: number = 10;
  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.pedidos = []
    this.buscarpedidos();
  }

  buscarpedidos(): void {
    this.pedidoService
      .buscarTodosPedidosDoCliente(this.paginaAtual, this.tamanho)
      .subscribe((data) => {
        this.pedidoPaginationModel = data;
        this.pedidoPaginationModel.content.forEach((pedido) => {
          this.pedidos.push(pedido);
        });
      });
  }

  loadData(event) {
    this.paginaAtual++;

    setTimeout(() => {
      event.target.complete();
      this.buscarpedidos();

      if (this.pedidos.length == this.pedidoPaginationModel.totalElements) {
        event.target.disabled = true;
      }
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    }, 500);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoFullModel } from 'src/app/shared/models/pedido-full-model';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.page.html',
  styleUrls: ['./pedido-item.page.scss'],
})
export class PedidoItemPage implements OnInit {
  pedidoFullModel: PedidoFullModel;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.pedidoService
        .buscarPedidoDoClientePorId(data.id)
        .subscribe((pedido) => {
          this.pedidoFullModel = pedido;
        });
    });
  }
}

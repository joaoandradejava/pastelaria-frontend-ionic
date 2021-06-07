import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoItemPage } from './pedido-item.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoItemPageRoutingModule {}

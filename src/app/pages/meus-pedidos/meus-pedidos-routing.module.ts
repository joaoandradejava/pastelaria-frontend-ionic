import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusPedidosPage } from './meus-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusPedidosPageRoutingModule {}

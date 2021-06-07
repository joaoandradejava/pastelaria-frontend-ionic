import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoDeComprasPage } from './carrinho-de-compras.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoDeComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoDeComprasPageRoutingModule {}

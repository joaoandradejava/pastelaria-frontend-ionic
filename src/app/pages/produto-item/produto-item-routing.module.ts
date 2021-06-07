import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoItemPage } from './produto-item.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoItemPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoCategoriaPage } from './produto-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoCategoriaPageRoutingModule {}

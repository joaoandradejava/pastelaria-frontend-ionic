import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoNovoPage } from './endereco-novo.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoNovoPageRoutingModule {}

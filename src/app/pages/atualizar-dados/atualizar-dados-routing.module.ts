import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarDadosPage } from './atualizar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarDadosPageRoutingModule {}

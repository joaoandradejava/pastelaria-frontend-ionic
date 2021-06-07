import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletarCadastroPage } from './deletar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: DeletarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletarCadastroPageRoutingModule {}

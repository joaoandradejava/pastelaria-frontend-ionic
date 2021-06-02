import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusEnderecosPage } from './meus-enderecos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusEnderecosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusEnderecosPageRoutingModule {}

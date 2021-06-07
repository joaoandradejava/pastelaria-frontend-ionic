import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MudarSenhaPage } from './mudar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: MudarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MudarSenhaPageRoutingModule {}

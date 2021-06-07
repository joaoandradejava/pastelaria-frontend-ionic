import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletarCadastroPageRoutingModule } from './deletar-cadastro-routing.module';

import { DeletarCadastroPage } from './deletar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletarCadastroPageRoutingModule
  ],
  declarations: [DeletarCadastroPage]
})
export class DeletarCadastroPageModule {}

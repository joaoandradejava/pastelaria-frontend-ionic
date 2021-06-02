import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueceuSenhaPageRoutingModule } from './esqueceu-senha-routing.module';

import { EsqueceuSenhaPage } from './esqueceu-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueceuSenhaPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [EsqueceuSenhaPage]
})
export class EsqueceuSenhaPageModule {}

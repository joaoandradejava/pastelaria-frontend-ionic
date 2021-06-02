import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarDadosPageRoutingModule } from './atualizar-dados-routing.module';

import { AtualizarDadosPage } from './atualizar-dados.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarDadosPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [AtualizarDadosPage]
})
export class AtualizarDadosPageModule {}

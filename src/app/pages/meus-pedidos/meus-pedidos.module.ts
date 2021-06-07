import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusPedidosPageRoutingModule } from './meus-pedidos-routing.module';

import { MeusPedidosPage } from './meus-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusPedidosPageRoutingModule
  ],
  declarations: [MeusPedidosPage]
})
export class MeusPedidosPageModule {}

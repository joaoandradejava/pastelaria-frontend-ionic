import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoItemPageRoutingModule } from './pedido-item-routing.module';

import { PedidoItemPage } from './pedido-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoItemPageRoutingModule
  ],
  declarations: [PedidoItemPage]
})
export class PedidoItemPageModule {}

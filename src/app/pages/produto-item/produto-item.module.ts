import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoItemPageRoutingModule } from './produto-item-routing.module';

import { ProdutoItemPage } from './produto-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoItemPageRoutingModule
  ],
  declarations: [ProdutoItemPage]
})
export class ProdutoItemPageModule {}

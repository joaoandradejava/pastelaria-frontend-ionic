import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoCategoriaPageRoutingModule } from './produto-categoria-routing.module';

import { ProdutoCategoriaPage } from './produto-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoCategoriaPageRoutingModule
  ],
  declarations: [ProdutoCategoriaPage]
})
export class ProdutoCategoriaPageModule {}

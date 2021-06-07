import { EcolherEnderecoComponent } from './../../components/ecolher-endereco/ecolher-endereco.component';
import { EnderecoModel } from './../../shared/models/endereco-model';
import { NgModule } from '@angular/core';
import { CommonModule, formatNumber } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoDeComprasPageRoutingModule } from './carrinho-de-compras-routing.module';

import { CarrinhoDeComprasPage } from './carrinho-de-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoDeComprasPageRoutingModule
  ],
  declarations: [CarrinhoDeComprasPage],
  providers: [FormBuilder]
})
export class CarrinhoDeComprasPageModule {}

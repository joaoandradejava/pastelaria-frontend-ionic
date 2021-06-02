import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusEnderecosPageRoutingModule } from './meus-enderecos-routing.module';

import { MeusEnderecosPage } from './meus-enderecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusEnderecosPageRoutingModule
  ],
  declarations: [MeusEnderecosPage]
})
export class MeusEnderecosPageModule {}

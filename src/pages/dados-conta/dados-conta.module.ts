import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosContaPage } from './dados-conta';

@NgModule({
  declarations: [
    DadosContaPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosContaPage),
  ],
})
export class DadosContaPageModule {}

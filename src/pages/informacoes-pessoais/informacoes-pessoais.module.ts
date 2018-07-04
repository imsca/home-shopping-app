import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacoesPessoaisPage } from './informacoes-pessoais';

@NgModule({
  declarations: [
    InformacoesPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacoesPessoaisPage),
  ],
})
export class InformacoesPessoaisPageModule {}

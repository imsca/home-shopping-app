import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { MainPage } from './main';
import { CepProvider } from '../../providers/cep/cep';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { MercadoProvider } from '../../providers/mercado/mercado';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider,
    UsuarioProvider,
    MercadoProvider
  ]
})
export class MainPageModule {}

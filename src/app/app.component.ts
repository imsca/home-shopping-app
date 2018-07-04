import { ListaPedidosPage } from './../pages/lista-pedidos/lista-pedidos';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ListaPage } from './../pages/lista/lista';
import { MainPage } from './../pages/main/main';
import { InformacoesPessoaisPage } from '../pages/informacoes-pessoais/informacoes-pessoais';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  paginaInicial:any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    ) {
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  mercadoPage() {
    this.nav.setRoot(MainPage);
  }
  logOut() {
    this.nav.setRoot(LoginPage);
  }
  listaPage() {
    this.nav.setRoot(ListaPage);
  }
  listaPedidoPage() {
    this.nav.setRoot(ListaPedidosPage);
  }
  informacoesPessoais() {
    this.nav.setRoot(InformacoesPessoaisPage);
  }
}


import { Consumidor } from './../../providers/model/model';
import { Storage } from '@ionic/storage';
import { MercadoProdutosPage } from './../mercado-produtos/mercado-produtos';
import { MercadoProvider } from './../../providers/mercado/mercado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  menuActive: string;
  mercados$: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuController: MenuController,
              public mercadoProvider: MercadoProvider,
              public storage: Storage
              ) {
    this.enableMenu();
  }
  enableMenu() {
    this.menuActive = "menu";
    this.menuController.enable(true, 'menu');
  }

  visualizarMercado(mercado): void {
    this.navCtrl.push(MercadoProdutosPage, {
      mercado: mercado
      });
  }

  ionViewDidLoad() {
    this.mercados$ = this.mercadoProvider.getMercados();
    this.storage.get('user')
      .then(val => {
        let consumidor: Consumidor = val;
        console.log(consumidor);
      })
  }

}

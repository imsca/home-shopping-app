import { ListaPedidosItensPage } from './../lista-pedidos-itens/lista-pedidos-itens';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

/**
 * Generated class for the ListaPedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pedidos',
  templateUrl: 'lista-pedidos.html',
})
export class ListaPedidosPage {
  public pedido: any;
  public menuActive: string = '';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menuController: MenuController,
     public modalCtrl: ModalController) {

    this.pedido = this.navParams.get('pedido');
    console.log(this.pedido);
    this.enableMenu();
  }

  enableMenu() {
    this.menuActive = "menu";
    this.menuController.enable(true, 'menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPedidosPage');
  }

  showModal(): void {
    this.modalCtrl.create(ListaPedidosItensPage, {items: this.pedido.items}).present();
  }

}

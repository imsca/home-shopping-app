import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ListaPedidosItensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pedidos-itens',
  templateUrl: 'lista-pedidos-itens.html',
})
export class ListaPedidosItensPage {
  public items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = this.navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPedidosItensPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

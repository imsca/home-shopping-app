import { MercadoProvider } from './../../providers/mercado/mercado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pedido, Produto } from '../../providers/model/model';
import { Observable } from 'rxjs/Observable';

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
  public pedido: Pedido;
  public items$: Observable<Produto[]>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public mercadoProvider: MercadoProvider) {
    this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    this.items$ = this.mercadoProvider.getItensPedido(this.pedido.id);
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

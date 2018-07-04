import { Storage } from '@ionic/storage';
import { MercadoProvider } from './../../providers/mercado/mercado';
import { ListaPedidosItensPage } from './../lista-pedidos-itens/lista-pedidos-itens';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { Pedido } from '../../providers/model/model';
import { Observable } from 'rxjs/Observable';

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
  public pedidos$: Observable<Pedido[]>;
  public pedidos: Pedido[];
  public menuActive: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuController: MenuController,
    public modalCtrl: ModalController,
    public mercadoProvider: MercadoProvider,
    public storage: Storage) {
    this.enableMenu();
  }

  enableMenu() {
    this.menuActive = "menu";
    this.menuController.enable(true, 'menu');
  }

  ionViewDidLoad() {
    this.storage.get('user')
      .then(value => {
        this.pedidos$ = this.mercadoProvider.getPedidos(value.id);
      });
    
  }

  showModal(pedido: Pedido): void {
    this.modalCtrl.create(ListaPedidosItensPage, { pedido: pedido }).present();
  }

}

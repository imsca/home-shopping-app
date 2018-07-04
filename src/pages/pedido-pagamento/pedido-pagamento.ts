import { MercadoProvider } from './../../providers/mercado/mercado';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { Pedido } from '../../providers/model/model';

/**
 * Generated class for the PedidoPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pedido-pagamento',
  templateUrl: 'pedido-pagamento.html',
})
export class PedidoPagamentoPage {
  public pedido: Pedido;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public loadingCtrl: LoadingController,
     public mercadoProvider: MercadoProvider,
     public toastCtrl: ToastController) {
    this.pedido = this.navParams.get('pedido');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPagamentoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  processarPagamento() {
    let loading = this.createLoading();
    
    console.log(this.pedido);
    loading.present();
    this.mercadoProvider.postPedido(this.pedido).subscribe(response => {
      if(response) {
        loading.dismiss(true);
      } else {
        loading.dismiss(false);
      }
      console.log(response);
    });

  }
  createLoading(): Loading {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    loading.onDidDismiss((data) => {
      if(data){
        this.toastCtrl.create({
          duration: 3000,
          message: "Concluído com sucesso!",
          position: "top"
        }).present();
        this.navCtrl.popToRoot();
      } else {
        this.toastCtrl.create({
          duration: 3000,
          message: "Erro: Não foi possível concluir",
          position: "top"
        }).present();
      }
    });
    return loading;
  }
  public calcularTroco(): void {
    this.pedido.pagamento.troco = this.pedido.pagamento.valor - this.pedido.total;
  }
}

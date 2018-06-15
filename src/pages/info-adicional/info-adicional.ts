
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { CepProvider } from './../../providers/cep/cep';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Consumidor, Endereco } from '../../providers/model/model';

/**
 * Generated class for the InfoAdicionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-adicional',
  templateUrl: 'info-adicional.html',
})
export class InfoAdicionalPage {
  public consumidor: Consumidor;
  public endereco: Endereco = {
    cep: '',
    logradouro: '',
    numero: '',
    cidade: '',
    bairro: '',
    uf: ''
  };

  constructor(public navCtrl: NavController
            , public navParams: NavParams
            , public cepProvider: CepProvider
            , public usuarioProvider: UsuarioProvider
            , public alertCtrl: AlertController
          ) {
    this.consumidor = this.navParams.get('consumidor');
  }


  consultaCep(event: any) {
    if(/[0-9]{8}/.test(this.endereco.cep.trim())){
      this.cepProvider.getCep(this.endereco.cep)
        .subscribe(data => {
          this.endereco.logradouro = data['logradouro'];
          this.endereco.bairro = data['bairro'];
          this.endereco.cidade = data['localidade'];
          this.endereco.uf = data['uf'];
        });
    }
  }

  cadastrar() {
    this.consumidor.endereco = this.endereco;
    this.usuarioProvider
      .postConsumidor(this.consumidor)
      .subscribe(data => {
        if(data.id) {
          this.alertSuccess();
        }
    });
  }
  alertSuccess() {
    this.alertCtrl.create({
      title: 'Usuário cadastrado com sucesso',
      message: 'Agora você poderá utilizar o aplicativo',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        }
      ]
    }).present();
  }
  alertFail() {

  }
}

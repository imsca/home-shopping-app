import { CepProvider } from './../../providers/cep/cep';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cepProvider: CepProvider) {
    this.consumidor = this.navParams.get('consumidor');
  }
  ionViewWillEnter() {

  }
  ionViewDidLoad() {
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
    console.log(this.consumidor);
  }
}

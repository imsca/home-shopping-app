import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consumidor } from '../../providers/model/model';

/**
 * Generated class for the DadosContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-conta',
  templateUrl: 'dados-conta.html',
})
export class DadosContaPage {
  public consumidor$: Promise<Consumidor>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    this.consumidor$ = this.storage.get('user');
  }

}

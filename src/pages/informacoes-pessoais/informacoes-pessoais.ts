import { DadosPessoaisPage } from './../dados-pessoais/dados-pessoais';
import { DadosContaPage } from './../dados-conta/dados-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the InformacoesPessoaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes-pessoais',
  templateUrl: 'informacoes-pessoais.html',
})
export class InformacoesPessoaisPage {
  public menuActive: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuController: MenuController) {
    this.enableMenu();
  }
  
  enableMenu() {
    this.menuActive = "menu";
    this.menuController.enable(true, 'menu');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesPessoaisPage');
  }
  abrirDadosConta() {
    this.navCtrl.push(DadosContaPage);
  }
  abrirDadosPessoais() {
    this.navCtrl.push(DadosPessoaisPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menuController: MenuController) {
    this.enableMenu();
  }
  enableMenu() {
    this.menuActive = "menu";
    this.menuController.enable(true, 'menu');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
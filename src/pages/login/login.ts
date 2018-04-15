import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from '../main/main';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  public user: string;
  public password: string;

  constructor(public navCtrl: NavController) {

  }

  signUp() { 
    this.navCtrl.push(SignUpPage);
  }

  logIn() {
    if(this.user === 'admin'
    && this.password === '123')
    this.navCtrl.setRoot(MainPage, {
      user: {
        username: this.user
      }
    });
  }

}

import { Storage } from '@ionic/storage';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from '../main/main';
import { Usuario } from '../../providers/model/model';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  public user: Usuario;
  public render: boolean;
  constructor(public navCtrl: NavController
            , public usuarioProvider: UsuarioProvider
            , public storage: Storage
            , public toastCtrl: ToastController) {
    this.user  = {
      login: '',
      senha: ''
    };
  }
  signUp() { 
    this.navCtrl.push(SignUpPage);
  }

  logIn() {
    this.render = false;
    this.usuarioProvider.getConsumidor(this.user)
      .subscribe(res => {
        if(res){
          this.storage.set('user', res);
          this.navCtrl.setRoot(MainPage, {
            user: res
          });
        } else {
          this.renderAgain();
          this.showMessage();
        }
      });
  }
  ionViewDidLoad(){
    this.render = true;
  }
  renderAgain() {
    this.render = true;
    this.user.login = '';
    this.user.senha = '';
  }
  showMessage() {
    this.toastCtrl.create({
      message: 'Usuário não encontrado',
      duration: 3000,
      position: 'top'
    }).present();
  }
}

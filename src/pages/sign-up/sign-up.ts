import { UsuarioProvider } from './../../providers/usuario/usuario';
import { InfoAdicionalPage } from './../info-adicional/info-adicional';
import { Usuario, Consumidor } from './../../providers/model/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public emailConfirma: string;
  public senhaConfirma: string;
  public usuario: Usuario = {
    login: '',
    senha: '',
    email: '',
  };
  public consumidor: Consumidor = {
    nome: '',
  };

  constructor(public navCtrl: NavController
            , public navParams: NavParams
            , public toast: ToastController
            , public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  informacoesAdd() {
    if(this.usuario.email === this.emailConfirma
    && this.usuario.senha === this.senhaConfirma){
      console.log("iguais");
      this.consumidor.usuario = this.usuario;
      this.navCtrl.push(InfoAdicionalPage, {
        consumidor: this.consumidor
      });
    }
    else 
      this.toast.create({
        message: 'Email ou Senha inconsistente',
        duration: 3000
      }).present();
    
  }

}

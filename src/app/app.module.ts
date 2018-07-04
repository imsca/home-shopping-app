import { DadosPessoaisPage } from './../pages/dados-pessoais/dados-pessoais';
import { DadosContaPage } from './../pages/dados-conta/dados-conta';
import { ListaPedidosPage } from './../pages/lista-pedidos/lista-pedidos';
import { MercadoProdutosPage } from './../pages/mercado-produtos/mercado-produtos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from "../pages/sign-up/sign-up";
import { InfoAdicionalPage } from './../pages/info-adicional/info-adicional';
import { ListaPage } from './../pages/lista/lista';
import { MainPage } from './../pages/main/main';
import { CepProvider } from '../providers/cep/cep';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { MercadoProvider } from '../providers/mercado/mercado';
import { ListaPedidosItensPage } from '../pages/lista-pedidos-itens/lista-pedidos-itens';
import { FormaPagamentoProvider } from '../providers/forma-pagamento/forma-pagamento';
import { PedidoPagamentoPage } from '../pages/pedido-pagamento/pedido-pagamento';
import { InformacoesPessoaisPage } from '../pages/informacoes-pessoais/informacoes-pessoais';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUpPage,
    InfoAdicionalPage,
    MainPage,
    ListaPage,
    MercadoProdutosPage,
    ListaPedidosPage,
    ListaPedidosItensPage,
    PedidoPagamentoPage,
    InformacoesPessoaisPage,
    DadosContaPage,
    DadosPessoaisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    InfoAdicionalPage,
    MainPage,
    ListaPage,
    MercadoProdutosPage,
    ListaPedidosPage,
    ListaPedidosItensPage,
    PedidoPagamentoPage,
    InformacoesPessoaisPage,
    DadosContaPage,
    DadosPessoaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider,
    UsuarioProvider,
    MercadoProvider,
    FormaPagamentoProvider
  ]
})
export class AppModule {}

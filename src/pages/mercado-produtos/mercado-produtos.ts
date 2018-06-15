import { Storage } from '@ionic/storage';
import { FormaPagamentoProvider } from './../../providers/forma-pagamento/forma-pagamento';
import { ListaPedidosPage } from './../lista-pedidos/lista-pedidos';
import { MercadoProvider } from './../../providers/mercado/mercado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Produto, Pedido, FormaPagamento } from '../../providers/model/model';

@IonicPage()
@Component({
  selector: 'page-mercado-produtos',
  templateUrl: 'mercado-produtos.html',
})
export class MercadoProdutosPage {
  public search: string;
  public mercado: any;
  public produtos$: Observable<any>;
  public produtos: Produto[];
  public produtosCopy: Produto[];
  public pedido: Pedido = {
    produtos: [],
    data: new Date(),
    total: 0
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public mercadoProvider: MercadoProvider,
    public alertCtrl: AlertController,
    public formaPagamentoProvider: FormaPagamentoProvider,
    public storage: Storage) {
    this.mercado = this.navParams.get('mercado');
  }


  showDialog(produto: Produto): void {
    this.alertCtrl.create({
      title: 'Adicionar ao carrinho',
      message: `Nome: ${produto.nome}.`,
      subTitle: `Preço Unitário: R$${produto.preco}`,
      inputs: [
        {
          name: 'quantidade',
          placeholder: 'Ex. 2',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Adicionar',
          handler: (data) => {
            this.pedido.produtos.push({
              id: produto.id,
              nome: produto.nome,
              preco: produto.preco,
              quantidade: data.quantidade,
              imagem: produto.imagem
            });
            
          }
        }
      ]
    }).present();
    console.log(JSON.stringify(this.pedido));
  }

  fecharPedido(): void {
    this.pedido.varejo = this.mercado;
    this.storage.get('user')
      .then(value => {
        this.pedido.consumidor = value;
      })
    this.alertCtrl.create({
      title: 'Fechar Pedido',
      message: `Deseja Realizar o Pedido?`,
      buttons: [
        {
          text: 'Não',
          handler: data => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            let total: number = 0;
            this.pedido.produtos.forEach(produto => {
              total = total + (produto.preco * produto.quantidade);
            });
            this.pedido.total = total;
            this.showFormaPagamentoDialog();
          }
        }
      ]
    }).present();
  }

  showFormaPagamentoDialog(): void {
    let dialog = this.alertCtrl.create({
      title: 'Forma de Pagamento',
      message: `Escolha a forma em que deseja pagar`,
    });
    dialog.addButton({
      text: 'Cancelar',
    });

    dialog.addButton({
      text: 'OK',
      handler: (data: any) => {
        this.pedido.formaPagamento = {
          id: data
        }
        console.log(this.pedido);
        this.mercadoProvider.postPedido(this.pedido)
          .subscribe(response => {
            if(response) 
              this.alertCtrl.create({
                title: 'Pedido Realizado com sucesso',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {

                    }
                  }
                ]
              }).present();
          });
      }
    });

    this.formaPagamentoProvider
      .getFormasPagamentos(this.mercado.id)
      .subscribe(formas => {
        formas.forEach(forma => {
          dialog.addInput({
            type: 'radio',
            label: forma.descricao,
            value: forma.id.toString(),
          });
        });
        dialog.present();
      });
  }
  ionViewDidLoad() {
    this.produtos$ = this.mercadoProvider.getProdutos(this.mercado.id);
    this.mercadoProvider.getProdutos(this.mercado.id).subscribe(response => {
      this.produtos = response;
      this.produtosCopy = response;
    })
  }

  onInput($event: any): void {
    this.produtos = this.produtosCopy;
    this.produtos = this.produtos.filter(produto => produto.nome.toLowerCase().includes(this.search.toLowerCase()));
  }

  onCancel(): void {
    this.search = '';
  }

}

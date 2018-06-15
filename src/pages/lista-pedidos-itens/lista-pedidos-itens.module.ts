import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPedidosItensPage } from './lista-pedidos-itens';

@NgModule({
  declarations: [
    ListaPedidosItensPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPedidosItensPage),
  ],
})
export class ListaPedidosItensPageModule {}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Endpoint, Produto, Pedido } from '../model/model';

/*
  Generated class for the MercadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadoProvider {

  constructor(public http: HttpClient) {
    
  }
  getMercados(): Observable<any> {
    return this.http.get(`${Endpoint.SERVICE}/${Endpoint.VAREJO}`);
  }

  getProdutos(id: number): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${Endpoint.SERVICE}/${Endpoint.VAREJO}/${id}/${Endpoint.PRODUTO}`);
  }
  postPedido(pedido: Pedido): Observable<Pedido> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<Pedido>(`${Endpoint.SERVICE}/${Endpoint.PEDIDO}`, pedido, {
      headers: headers
    });
  }
  
}

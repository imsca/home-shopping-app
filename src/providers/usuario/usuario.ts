import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoint, Consumidor, Usuario } from '../model/model';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    
  }

  getConsumidor(usuario: Usuario): Observable<Consumidor> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<Consumidor>(`${Endpoint.SERVICE}/${Endpoint.CONSUMIDOR_AUTH}`, usuario, {headers: headers});
  }
  
  postConsumidor(consumidor: Consumidor): Observable<Consumidor> {

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.post<Consumidor>(`http://localhost:8101/consumidores/add`, consumidor, {headers: headers});
  }

  postTest(teste: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<string>(`http://localhost:8101/pedido`, teste, {headers: headers});
  }
}

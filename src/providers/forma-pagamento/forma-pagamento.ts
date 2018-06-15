import { FormaPagamento, Endpoint } from './../model/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormaPagamentoProvider {
  constructor(public http: HttpClient) {
  }

  getFormasPagamentos(id: number): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(`${Endpoint.SERVICE}/${Endpoint.FORMA_PAGAMENTO}/${id}/${Endpoint.VAREJO}`);
  }
  
}

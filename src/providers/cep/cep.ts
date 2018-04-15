import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CepProvider {
  //viacep.com.br/ws/[0-9]{8}/json
  cepUrl: string = 'http://viacep.com.br/ws/';
  constructor(public http: HttpClient) {
    console.log('Hello CepProvider Provider');
  }

  getCep(cep: string): Observable<any> {
    return this.http.get(`${this.cepUrl}/${cep}/json`);
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  public buscarCep(cep: string): Observable<any> {
    return this.http.get(`https://ws.apicep.com/cep/${cep}.json`);
  }
}

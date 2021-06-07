import { Backend } from './../utils/backend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public buscarTodas(): Observable<any>{
    return this.http.get(Backend.baseCategoria)
  }

  public buscarPorId(id: number): Observable<any>{
    return this.http.get(Backend.baseCategoria + `/${id}`)
  }
}

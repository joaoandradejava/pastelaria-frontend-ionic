import { Backend } from './../utils/backend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioCreateInput } from '../models/usuario-create-input';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public realizarCadastro(usuarioCreateInput: UsuarioCreateInput): Observable<any>{
    return this.http.post(Backend.baseUsuario, usuarioCreateInput)

  }
}

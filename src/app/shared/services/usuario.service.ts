import { EsqueceuSenhaInput } from './../models/esqueceu-senha-input';
import { Backend } from './../utils/backend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioCreateInput } from '../models/usuario-create-input';
import { UsuarioUpdateInput } from '../models/usuario-update-input';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  public realizarCadastro(
    usuarioCreateInput: UsuarioCreateInput
  ): Observable<any> {
    return this.http.post(Backend.baseUsuario, usuarioCreateInput);
  }

  public atualizar(
    usuarioId: number,
    usuarioUpdateInput: UsuarioUpdateInput
  ): Observable<any> {
    return this.http.put(
      Backend.baseUsuario + `/${usuarioId}`,
      usuarioUpdateInput
    );
  }

  public buscarPorId(usuarioId: number): Observable<any> {
    return this.http.get(Backend.baseUsuario + `/${usuarioId}`);
  }

  public esqueciSenha(esqueciSenhaInput: EsqueceuSenhaInput): Observable<any> {
    return this.http.put(
      Backend.baseUsuario + '/esqueci-senha',
      esqueciSenhaInput
    );
  }
}

import { EsqueceuSenhaInput } from './../models/esqueceu-senha-input';
import { Backend } from './../utils/backend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioCreateInput } from '../models/usuario-create-input';
import { UsuarioUpdateInput } from '../models/usuario-update-input';
import { EnderecoCorreioModel } from '../models/endereco-correio-model';
import { AlterarSenhaInput } from '../models/alterar-senha-input';

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

  public deletarPorId(id: number): Observable<any> {
    return this.http.delete(Backend.baseUsuario + `/${id}`);
  }

  public adicionarEndereco(
    usuarioId: number,
    endereco: EnderecoCorreioModel
  ): Observable<any> {
    return this.http.post(
      Backend.baseUsuario + `/${usuarioId}/enderecos`,
      endereco
    );
  }

  public buscarEnderecoDoCliente(usuarioId: number): Observable<any> {
    return this.http.get(Backend.baseUsuario + `/${usuarioId}/enderecos`);
  }

  public deletarEnderecoDoCliente(
    usuarioId: number,
    enderecoId: number
  ): Observable<any> {
    return this.http.delete(
      Backend.baseUsuario + `/${usuarioId}/enderecos/${enderecoId}`
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

  public alterarSenha(alterarSenhaInput: AlterarSenhaInput): Observable<any> {
    return this.http.put(Backend.baseUsuario + '/senha', alterarSenhaInput);
  }
}

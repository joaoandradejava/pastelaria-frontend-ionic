import { UsuarioAutenticado } from './../models/usuario-autenticado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor() {}

  public autenticar(usuarioAutenticado: UsuarioAutenticado): void {
    localStorage.setItem(
      'usuario-autenticado',
      JSON.stringify(usuarioAutenticado)
    );
  }

  public isLogado(): boolean {
    return localStorage.getItem('usuario-autenticado') !== undefined &&
      localStorage.getItem('usuario-autenticado') !== null
      ? true
      : false;
  }

  public getUsuarioAutenticado(): UsuarioAutenticado {
    if (!this.isLogado) {
      return null;
    }

    let usuarioAutenticado: UsuarioAutenticado = JSON.parse(
      localStorage.getItem('usuario-autenticado')
    );

    return usuarioAutenticado;
  }

  public deslogar(): void {
    localStorage.clear();
  }
}

import { Backend } from './../utils/backend';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoInput } from '../models/pedido-input';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  public fazerPedido(pedidoInput: PedidoInput): Observable<any> {
    return this.http.post(Backend.basePedido, pedidoInput);
  }

  public buscarTodosPedidosDoCliente(
    paginaAtual: number,
    tamanho: number
  ): Observable<any> {
    return this.http.get(
      Backend.basePedido + `?page=${paginaAtual}&size=${tamanho}`
    );
  }

  public buscarPedidoDoClientePorId(pedidoId: number): Observable<any> {
    return this.http.get(Backend.basePedido + `/${pedidoId}`);
  }
}

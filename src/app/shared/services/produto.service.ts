import { Backend } from './../utils/backend';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  public buscarTodosDisponivelDoEstoque(
    pagina: number,
    tamanho: number
  ): Observable<any> {
    return this.http.get(
      Backend.baseProduto +
        `/disponivel-estoque/paginacao?page=${pagina}&size=${tamanho}`
    );
  }

  public buscarPorId(id: number): Observable<any>{
    return this.http.get(Backend.baseProduto + `/${id}`)
  }

  public buscarTodosDisponivelPorCategoria(
    categoriaId: number,
    pagina: number,
    tamanho: number
  ): Observable<any> {
    return this.http.get(
      Backend.baseProduto +
        `/categoria/${categoriaId}/disponivel-estoque/paginacao?page=${pagina}&size=${tamanho}`
    );
  }
}

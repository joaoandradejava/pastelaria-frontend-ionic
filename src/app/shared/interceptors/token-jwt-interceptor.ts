import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';
import { UsuarioAutenticado } from '../models/usuario-autenticado';

@Injectable({
  providedIn: 'root',
})
export class TokenJwtInterceptor implements HttpInterceptor {
  constructor(private autenticacaoService: AutenticacaoService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.autenticacaoService.isLogado()) {
      let usuarioAutenticado: UsuarioAutenticado =
        this.autenticacaoService.getUsuarioAutenticado();
      let tokenJwt: string = usuarioAutenticado.tokenJwt;

      const request = req.clone({ setHeaders: { Authorization: tokenJwt } });
      return next.handle(request);
    }

    return next.handle(req);
  }
}

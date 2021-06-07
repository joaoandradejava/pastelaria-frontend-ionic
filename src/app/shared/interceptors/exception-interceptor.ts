import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExceptionInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastService,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.error.status === 403) {
          let mensagem =
            'Sessão expirou. para continuar é necessário realizar o login novamente.';
          this.toastService.exibirMensagem(mensagem, 5000, TipoMensagem.ERROR);
          this.autenticacaoService.deslogar();

          this.router.navigate(['']);
        } else {
          let mensagem: string = error.error.userMessage;
          let errors = error.error.errors;
          if (errors !== undefined && errors !== null) {
            mensagem = errors[0].userMessage;
            this.toastService.exibirMensagem(
              mensagem,
              5000,
              TipoMensagem.ERROR
            );
          } else {
            this.toastService.exibirMensagem(
              mensagem,
              5000,
              TipoMensagem.ERROR
            );
          }
        }
        return throwError(error);
      })
    );
  }
}

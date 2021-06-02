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

@Injectable({
  providedIn: 'root',
})
export class ExceptionInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let mensagem: string = error.error.userMessage;
        this.toastService.exibirMensagem(mensagem, 5000, TipoMensagem.ERROR);

        return throwError(error);
      })
    );
  }
}

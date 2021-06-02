import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators'
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoadingDismissInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(finalize(() => {
      this.loadingService.pararLoading()
    }));
  }
}

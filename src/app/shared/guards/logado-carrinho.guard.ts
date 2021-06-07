import { ToastService } from 'src/app/shared/services/toast.service';
import { AutenticacaoService } from './../services/autenticacao.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TipoMensagem } from '../models/tipo-mensagem';

@Injectable({
  providedIn: 'root',
})
export class LogadoCarrinhoGuard implements CanActivate {
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.autenticacaoService.isLogado()) {
      this.router.navigate(['/login']);
      this.toastService.exibirMensagem(
        'É necessario fazer estar logado no sistema para ver seu carrinho de compras',
        5000,
        TipoMensagem.ALERTA
      );

      return false;
    }

    return true;
  }
}

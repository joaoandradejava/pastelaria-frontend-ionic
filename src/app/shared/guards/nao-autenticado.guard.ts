import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class NaoAutenticadoGuard implements CanActivate {
  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.autenticacaoService.isLogado()) {
      this.router.navigate(['']);

      return false;
    }

    return true;
  }
}

import { NaoAutenticadoGuard } from './shared/guards/nao-autenticado.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './shared/guards/autenticado.guard';

const routes: Routes = [
  {
    path: 'tela-principal',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'tela-principal',
    pathMatch: 'full',
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () =>
      import('./pages/cadastro-usuario/cadastro-usuario.module').then(
        (m) => m.CadastroUsuarioPageModule
      ),
    canActivate: [NaoAutenticadoGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NaoAutenticadoGuard],
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () =>
      import('./pages/esqueceu-senha/esqueceu-senha.module').then(
        (m) => m.EsqueceuSenhaPageModule
      ),
    canActivate: [NaoAutenticadoGuard],
  },
  {
    path: 'atualizar-dados',
    loadChildren: () =>
      import('./pages/atualizar-dados/atualizar-dados.module').then(
        (m) => m.AtualizarDadosPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'meus-enderecos',
    loadChildren: () => import('./pages/meus-enderecos/meus-enderecos.module').then( m => m.MeusEnderecosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

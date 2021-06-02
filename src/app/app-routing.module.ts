import { NaoAutenticadoGuard } from './shared/guards/nao-autenticado.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

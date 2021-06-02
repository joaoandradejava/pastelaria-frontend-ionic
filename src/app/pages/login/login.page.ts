import { LoadingService } from './../../shared/services/loading.service';
import { UsuarioAutenticado } from './../../shared/models/usuario-autenticado';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
          Validators.email,
        ],
      ],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  public realizarLogin(): void {
    if (this.formGroup.valid) {
      this.loadingService.carregarLoading()
      this.loginService
        .realizarLogin(this.formGroup.value)
        .subscribe((data) => {
          let usuarioAutenticado: UsuarioAutenticado = data;
          this.autenticacaoService.autenticar(usuarioAutenticado);
          this.loadingService.pararLoading()
          this.router.navigate(['']);
        });
    }
  }
}

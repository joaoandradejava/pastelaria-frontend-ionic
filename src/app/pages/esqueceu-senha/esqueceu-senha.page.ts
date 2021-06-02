import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
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
    });
  }

  public enviarNovaSenha(): void {
    if (this.formGroup.valid) {
      this.loadingService.carregarLoading();
      this.usuarioService.esqueciSenha(this.formGroup.value).subscribe((_) => {
        this.formGroup.reset();
        this.toastService.exibirMensagem(
          'Uma nova senha foi enviada para seu endereço de email!',
          5000,
          TipoMensagem.SUCESSO
        );
      });
    }
  }
}

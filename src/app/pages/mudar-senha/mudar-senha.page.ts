import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-mudar-senha',
  templateUrl: './mudar-senha.page.html',
  styleUrls: ['./mudar-senha.page.scss'],
})
export class MudarSenhaPage implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastService: ToastService, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      senhaAtual: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
        ],
      ],
      novaSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  public alterarSenha(): void {
    if(this.formGroup.valid){
      this.usuarioService.alterarSenha(this.formGroup
        .value).subscribe(data => {
          this.toastService.exibirMensagem('Sua senha foi alterada com sucesso!', 5000, TipoMensagem.SUCESSO)
          this.formGroup.reset()

        })
    }
  }
}

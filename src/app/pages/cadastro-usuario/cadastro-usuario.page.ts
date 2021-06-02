import { ValidadorFormulario } from './../../shared/utils/validador-formulario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { UsuarioCreateInput } from 'src/app/shared/models/usuario-create-input';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
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
      confirmacaoSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(255),
        ],
      ],
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  public getMensagemCampoObrigatorio(label: string): string {
    return ValidadorFormulario.getMensagemCampoObrigatorio(label);
  }

  public getMensagemCampoTamanhoCaracteres(
    label: string,
    min: number,
    max: number
  ): string {
    return ValidadorFormulario.getMensagemCampoTamanhoCaracteres(
      label,
      min,
      max
    );
  }

  public getMensagemCampoInvalido(label: string): string {
    return ValidadorFormulario.getMensagemCampoInvalido(label);
  }

  public getNumeroTelefoneSemMascara(): string{
    let telefone: string = this.formGroup.get('telefone').value
    telefone = telefone.replace('-', '')
    telefone = telefone.replace(' ', '')
    telefone = telefone.replace(' ', '')
    telefone = telefone.replace('(', '')
    telefone = telefone.replace(')', '')

    return telefone;
  }

  public realizarCadastro(): void {
    if (this.formGroup.valid) {
      this.loadingService.carregarLoading()
      let usuarioCreateInput: UsuarioCreateInput = this.formGroup.value
      usuarioCreateInput.telefone = this.getNumeroTelefoneSemMascara()
      this.usuarioService.realizarCadastro(usuarioCreateInput).subscribe((_) => {
        this.formGroup.reset()
        this.toastService.exibirMensagem('O seu cadastro foi realizado com sucesso!', 5000, TipoMensagem.SUCESSO)
      })
    }
  }
}

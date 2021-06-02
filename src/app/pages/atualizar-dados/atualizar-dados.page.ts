import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteFullModel } from 'src/app/shared/models/cliente-full-model';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { UsuarioUpdateInput } from 'src/app/shared/models/usuario-update-input';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ValidadorFormulario } from 'src/app/shared/utils/validador-formulario';

@Component({
  selector: 'app-atualizar-dados',
  templateUrl: './atualizar-dados.page.html',
  styleUrls: ['./atualizar-dados.page.scss'],
})
export class AtualizarDadosPage implements OnInit {
  formGroup: FormGroup;
  clienteFullModel: ClienteFullModel;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private toastService: ToastService
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
      cpf: ['', [Validators.minLength(14), Validators.maxLength(14)]],
      telefone: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      celular: ['', [Validators.minLength(16), Validators.maxLength(16)]],
    });

    this.preencherFormComDadosDoUsuario();
  }

  preencherFormComDadosDoUsuario(): void {
    if (this.autenticacaoService.isLogado()) {
      this.usuarioService
        .buscarPorId(this.autenticacaoService.getUsuarioAutenticado().id)
        .subscribe((data) => {
          this.clienteFullModel = data;
          console.log(this.clienteFullModel);
          this.formGroup.get('nome').setValue(this.clienteFullModel.nome);
          this.formGroup.get('cpf').setValue(this.clienteFullModel.cpf);
          this.formGroup
            .get('telefone')
            .setValue(this.clienteFullModel.telefone);
          this.formGroup.get('celular').setValue(this.clienteFullModel.celular);
        });
    }
  }

  public formatarCpfSemMascara(): string {
    let cpf: string = this.formGroup.get('cpf').value;

    cpf = cpf.replace('.', '');
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('-', '');

    return cpf;
  }

  public getNumeroTelefoneSemMascara(label: string): string {
    let telefone: string = this.formGroup.get(label).value;
    telefone = telefone.replace('-', '');
    telefone = telefone.replace(' ', '');
    telefone = telefone.replace(' ', '');
    telefone = telefone.replace('(', '');
    telefone = telefone.replace(')', '');

    return telefone;
  }

  public confirmar(): void {
    if (this.formGroup.valid) {
      let usuarioUpdateInput: UsuarioUpdateInput = this.formGroup.value;
      usuarioUpdateInput.cpf = this.formatarCpfSemMascara();
      usuarioUpdateInput.cpf = usuarioUpdateInput.cpf === '' || usuarioUpdateInput.cpf.trim() === ''? undefined : usuarioUpdateInput.cpf
      usuarioUpdateInput.telefone =
        this.getNumeroTelefoneSemMascara('telefone');
      usuarioUpdateInput.celular = this.getNumeroTelefoneSemMascara('celular');
      this.usuarioService
        .atualizar(
          this.autenticacaoService.getUsuarioAutenticado().id,
          usuarioUpdateInput
        )
        .subscribe((data) => {
          this.toastService.exibirMensagem(
            'Seus dados foram atualizados com sucesso!',
            5000,
            TipoMensagem.SUCESSO
          );
          this.preencherFormComDadosDoUsuario();
        });
    }
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
}

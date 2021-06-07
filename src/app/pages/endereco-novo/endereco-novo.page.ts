import { EnderecoService } from './../../shared/services/endereco.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { EnderecoCorreioModel } from 'src/app/shared/models/endereco-correio-model';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-endereco-novo',
  templateUrl: './endereco-novo.page.html',
  styleUrls: ['./endereco-novo.page.scss'],
})
export class EnderecoNovoPage implements OnInit {
  formGroup: FormGroup;
  enderecoCorreio: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private enderecoService: EnderecoService,
    private autenticacaoService: AutenticacaoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cep: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
      complemento: ['', [Validators.minLength(0), Validators.maxLength(255)]],
      numero: [
        '',
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  public buscarEndereco(): void {
    let cep: string = this.formGroup.get('cep').value;

    this.enderecoService.buscarCep(cep).subscribe((data) => {
      if (data.status === 200) {
        this.enderecoCorreio = data;
      } else {
        this.toastService.exibirMensagem(
          'Cep inválido',
          5000,
          TipoMensagem.ALERTA
        );
        this.enderecoCorreio = undefined;
      }
    });
  }

  public adicionarEndereco(): void {
    if (this.formGroup.valid && this.enderecoCorreio !== undefined) {
      let enderecoCorreio: EnderecoCorreioModel = new EnderecoCorreioModel();
      enderecoCorreio.cep = this.formGroup.get('cep').value;
      enderecoCorreio.estado = this.enderecoCorreio.state;
      enderecoCorreio.cidade = this.enderecoCorreio.city;
      enderecoCorreio.endereco = this.enderecoCorreio.address;
      enderecoCorreio.bairro = this.enderecoCorreio.district;
      enderecoCorreio.complemento = this.formGroup.get('complemento').value;
      enderecoCorreio.numero = this.formGroup.get('numero').value;
      this.usuarioService
        .adicionarEndereco(
          this.autenticacaoService.getUsuarioAutenticado().id,
          enderecoCorreio
        )
        .subscribe((data) => {
          this.formGroup.reset();
          this.enderecoCorreio = undefined;
          this.toastService.exibirMensagem(
            'Endereço adicionado com sucesso!',
            5000,
            TipoMensagem.SUCESSO
          );
        });
    }
  }
}

import { EnderecoModel } from './../../shared/models/endereco-model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.page.html',
  styleUrls: ['./meus-enderecos.page.scss'],
})
export class MeusEnderecosPage implements OnInit {
  enderecosDoUsuario: EnderecoModel[];

  constructor(
    private autenticacaoService: AutenticacaoService,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.buscarEnderecos();
  }

  private buscarEnderecos(): void {
    this.usuarioService
      .buscarEnderecoDoCliente(
        this.autenticacaoService.getUsuarioAutenticado().id
      )
      .subscribe((data) => {
        this.enderecosDoUsuario = data;
      });
  }

  public async deletarEndereco(enderecoId: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exclusão do Endereço',
      message:
        'Você tem certeza que deseja <strong>excluir</strong> este endereço?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Deletar',
          handler: () => {
            this.deletar(enderecoId);
          },
        },
      ],
    });

    alert.present();
  }

  private deletar(enderecoId: number): void {
    this.usuarioService
      .deletarEnderecoDoCliente(
        this.autenticacaoService.getUsuarioAutenticado().id,
        enderecoId
      )
      .subscribe((_) => {
        this.toastService.exibirMensagem(
          'Endereço deletado com sucesso!',
          5000,
          TipoMensagem.SUCESSO
        );
        this.buscarEnderecos();
      });
  }
}

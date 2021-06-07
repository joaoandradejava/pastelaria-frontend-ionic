import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-deletar-cadastro',
  templateUrl: './deletar-cadastro.page.html',
  styleUrls: ['./deletar-cadastro.page.scss'],
})
export class DeletarCadastroPage implements OnInit {
  constructor(private alertController: AlertController, private autenticacaoService: AutenticacaoService, private usuarioService: UsuarioService, private toastService: ToastService, private router: Router) {}

  ngOnInit() {}

  public deletarConta(): void {
    const alert = this.alertController
      .create({
        cssClass: 'my-custom-class',
        header: 'Deletar conta',
        message:
          'Você tem certeza que deseja <strong>deletar</strong> a sua conta?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Deletar',
            handler: () => {
              this.deletarPorId()
            },
          },
        ],
      })
      .then((p) => {
        p.present();
      });
  }


  private deletarPorId(): void{
    this.usuarioService.deletarPorId(this.autenticacaoService.getUsuarioAutenticado().id).subscribe(data => {
      this.autenticacaoService.deslogar()
      this.toastService.exibirMensagem('Sua conta foi deletada com sucesso!', 5000, TipoMensagem.SUCESSO)
      this.router.navigate([''])
    })
  }
}

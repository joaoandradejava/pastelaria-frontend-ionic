import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TipoMensagem } from '../models/tipo-mensagem';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  public async exibirMensagem(
    mensagem: string,
    duracao: number,
    tipoMensagem: TipoMensagem
  ) {
    this.toastController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.toastController.dismiss();
      }

      this.toastController
        .create({
          message: mensagem,
          duration: duracao,
          position: 'top',
          color:
            tipoMensagem === TipoMensagem.SUCESSO
              ? 'success'
              : tipoMensagem === TipoMensagem.ERROR
              ? 'danger'
              : 'warning',
          buttons: [
            {
              text: 'Fechar',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ],
        })
        .then((toast) => {
          toast.present();
        });
    });
  }
}

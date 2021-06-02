import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  public carregarLoading() {
    this.loadingController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.loadingController.dismiss();
      }

      this.loadingController
        .create({
          message: 'Por favor aguarde',
        })
        .then((loading) => {
          loading.present();
        });
    });
  }

  public pararLoading(): void {
    this.loadingController.getTop().then((hasLoading) => {
      if (hasLoading) {
        this.loadingController.dismiss();
      }
    });
  }
}

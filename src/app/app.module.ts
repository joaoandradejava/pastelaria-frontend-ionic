import { ReactiveFormsModule } from '@angular/forms';
import { EcolherEnderecoComponent } from './components/ecolher-endereco/ecolher-endereco.component';
import { ExceptionInterceptor } from './shared/interceptors/exception-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingDismissInterceptor } from './shared/interceptors/loading-dismiss-interceptor';
import { TokenJwtInterceptor } from './shared/interceptors/token-jwt-interceptor';

@NgModule({
  declarations: [AppComponent, EcolherEnderecoComponent],
  entryComponents: [],
  exports: [EcolherEnderecoComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingDismissInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

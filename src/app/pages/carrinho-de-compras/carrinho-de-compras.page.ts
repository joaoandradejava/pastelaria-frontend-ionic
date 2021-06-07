import { AutenticacaoService } from './../../shared/services/autenticacao.service';
import { EcolherEnderecoComponent } from './../../components/ecolher-endereco/ecolher-endereco.component';
import { ItemCarrinho } from './../../shared/models/item-carrinho';
import { Carrinho } from './../../shared/models/carrinho';
import { Component, OnInit } from '@angular/core';
import { CarrinhoDeCompraService } from 'src/app/shared/services/carrinho-de-compra.service';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { ClienteFullModel } from 'src/app/shared/models/cliente-full-model';
import { EnderecoModel } from 'src/app/shared/models/endereco-model';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.page.html',
  styleUrls: ['./carrinho-de-compras.page.scss'],
})
export class CarrinhoDeComprasPage implements OnInit {
  carrinho: Carrinho = null;
  enderecos: EnderecoModel[];

  constructor(
    private carrinhoService: CarrinhoDeCompraService,
    private modalController: ModalController,
    private usuarioService: UsuarioService,
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.buscarCarrinho();

    this.usuarioService
      .buscarEnderecoDoCliente(
        this.autenticacaoService.getUsuarioAutenticado().id
      )
      .subscribe((data) => {
        this.enderecos = data;
      });
  }

  buscarCarrinho(): void {
    this.carrinho = this.carrinhoService.buscarCarrinho();
    this.usuarioService
    .buscarEnderecoDoCliente(
      this.autenticacaoService.getUsuarioAutenticado().id
    )
    .subscribe((data) => {
      this.enderecos = data;
    });
  }

  ionViewWillEnter() {
    this.carrinho = this.carrinhoService.buscarCarrinho();
  }

  diminuirQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
    this.buscarCarrinho();
  }

  aumentarQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.aumentarQuantidade(item);
    this.buscarCarrinho();
  }

  public valorTotal(): number{
    let carrinho: Carrinho = this.carrinhoService.buscarCarrinho()

    return carrinho.calcularValorTotal()
  }

  public finalizarPedido(): void {
    if (this.enderecos.length <= 0) {
      this.router.navigate(['/endereco-novo']);
      this.toastService.exibirMensagem(
        'É necessario ter pelo menos um endereço de entrega para poder finalizar o pedido!',
        5000,
        TipoMensagem.ALERTA
      );

      return;
    }

    const modal = this.modalController
      .create({
        component: EcolherEnderecoComponent,
        cssClass: 'my-custom-class',
      })
      .then((m) => {
        m.present();
      });
  }

  public limparCarrinho(): void {
    this.carrinho = null;
    this.carrinhoService.limparCarrinho();
  }
}

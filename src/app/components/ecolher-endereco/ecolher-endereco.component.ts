import { Carrinho } from './../../shared/models/carrinho';
import { EnderecoModel } from './../../shared/models/endereco-model';
import { AutenticacaoService } from './../../shared/services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { MenuController, ModalController } from '@ionic/angular';
import { PedidoInput } from 'src/app/shared/models/pedido-input';
import { CarrinhoDeCompraService } from 'src/app/shared/services/carrinho-de-compra.service';
import { ItemInput } from 'src/app/shared/models/item-input';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TipoMensagem } from 'src/app/shared/models/tipo-mensagem';

@Component({
  selector: 'app-ecolher-endereco',
  templateUrl: './ecolher-endereco.component.html',
  styleUrls: ['./ecolher-endereco.component.scss'],
})
export class EcolherEnderecoComponent implements OnInit {
  enderecos: EnderecoModel[];
  formGroup: FormGroup;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private carrinhoService: CarrinhoDeCompraService,
    private pedidoService: PedidoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.usuarioService
      .buscarEnderecoDoCliente(
        this.autenticacaoService.getUsuarioAutenticado().id
      )
      .subscribe((data) => {
        this.enderecos = data;
      });

    this.formGroup = this.formBuilder.group({
      enderecoDeEntrega: ['', Validators.required],
    });
  }

  confimar(): void {
    if (this.formGroup.valid) {
      let pedidoInput: PedidoInput = new PedidoInput();
      let carrinho: Carrinho = this.carrinhoService.buscarCarrinho();
      carrinho.itens.forEach((item) => {
        let itemInput: ItemInput = new ItemInput();
        itemInput.produtoId = item.id;
        itemInput.quantidade = item.quantidade;

        pedidoInput.itens.push(itemInput);
      });

      pedidoInput.enderecoDeEntrega.id =
        this.formGroup.get('enderecoDeEntrega').value;

      this.pedidoService.fazerPedido(pedidoInput).subscribe((data) => {
        this.carrinhoService.limparCarrinho();
        this.fechar();
        this.router.navigate(['']);
        this.toastService.exibirMensagem(
          'Seu pedido foi realizado com sucesso!',
          5000,
          TipoMensagem.SUCESSO
        );
      });
    }
  }

  fechar(): void {
    this.modalCtrl.dismiss();
  }
}

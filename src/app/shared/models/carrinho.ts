import { ItemCarrinho } from './item-carrinho';
export class Carrinho {
  itens: ItemCarrinho[] = [];

  public adicionarItemNoCarrinho(itemCarrinho: ItemCarrinho): void {
    let isJaPossuiiTem = false;
    this.itens.forEach((item) => {
      if (item.id === itemCarrinho.id) {
        item.quantidade++;
        isJaPossuiiTem = true;

        return;
      }
    });

    if (!isJaPossuiiTem) this.itens.push(itemCarrinho);
  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    let remover: boolean = false;

    this.itens.forEach((item) => {
      if (item.id === itemCarrinho.id) {
        item.quantidade--;
        if (item.quantidade <= 0) {
          remover = true;
        }
      }
    });

    if (remover) {
      for (let i = 0; i < this.itens.length; i++) {
        if (this.itens[i].id === itemCarrinho.id) {
          this.itens.splice(i, 1);
        }
      }
    }
  }
  public aumentarQuantidade(itemCarrinho: ItemCarrinho): void {
    this.itens.forEach((item) => {
      if (item.id === itemCarrinho.id) {
        item.quantidade++;
      }
    });
  }

  public calcularValorTotal(): number {
    let valorTotal: number = 0.0
    this.itens.forEach(item => {
      valorTotal += item.preco * item.quantidade
    })


    return valorTotal
  }
}

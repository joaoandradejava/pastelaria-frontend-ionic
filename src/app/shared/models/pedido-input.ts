import { EnderecoDeEntregaId } from './endereco-de-entrega-id';
import { ItemInput } from './item-input';
export class PedidoInput{
  itens: ItemInput[] = []
  enderecoDeEntrega: EnderecoDeEntregaId = new EnderecoDeEntregaId()
}

import { EnderecoModel } from "./endereco-model"
import { ItemModel } from "./item-model"
import { PagamentoModel } from "./pagamento-model"

export class PedidoFullModel{
  id: number
  data: string
  valorTotal: number
  situacaoPedido: string
  pagamento: PagamentoModel
  enderecoDeEntrega: EnderecoModel
  itens: ItemModel[]
}

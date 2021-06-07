import { PedidoModel } from './pedido-model';

export class PedidoPaginationModel {
  totalPages: number;
  totalElements: number;
  size: number;
  content: PedidoModel[];
}

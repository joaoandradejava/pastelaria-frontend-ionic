import { ProdutoModel } from './produto-model';

export class ProdutoPaginationModel {
  totalPages: number;
  totalElements: number;
  size: number;
  content: ProdutoModel[];
}

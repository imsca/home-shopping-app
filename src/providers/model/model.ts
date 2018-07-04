export interface Consumidor {
  id?: number;
  rg?: string;
  cpf?: string;
  nome?: string;
  sobrenome?: string;
  sexo?: string;
  telefone?: string;
  nascimento?: Date;
  usuario?: Usuario;
  endereco?: Endereco;
}

export interface Usuario {
  id?: number;
  login?: string;
  senha?: string;
  email?: string;
  role?: string;
}

export interface Endereco {
  id?: number;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}
export interface Produto {
  id?: number;
  nome?: string;
  quantidade?: number;
  preco?: number;
  imagem?: string;
  marca?: string;
  categoria?: string;
  varejo?: number;
}
export interface Pedido {
  id?: number
  dataPedido?: Date;
  total?: number;
  produtos?: Produto[];
  pagamento?: Pagamento;
  consumidor?: Consumidor;
  formaPagamento?: FormaPagamento;
  varejo?: any;
}
export interface Pagamento {
  id?: number;
  valor?: number;
  troco?: number;
}
export interface FormaPagamento {
  id?: number;
  idVarejo?: number;
  descricao?: string;
}
export class Endpoint {
  public static readonly SERVICE = 'http://localhost:8101';
  public static readonly CONSUMIDOR = 'consumidores';
  public static readonly CONSUMIDOR_AUTH = 'consumidores/auth';
  public static readonly FORMA_PAGAMENTO = 'pagamentos/formas';
  public static readonly VAREJO = 'varejos';
  public static readonly PRODUTO = 'produtos';
  public static readonly PEDIDO = 'pedido';
  public static readonly ITEM_PEDIDO = 'itempedido';
}
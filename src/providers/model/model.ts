export interface Consumidor {
  id?: number;
  rg?: string;
  cpf?: string;
  nome?: string;
  sobrenome?: string;
  sexo?: string;
  nascimento?: Date;
  usuario?: Usuario;
  endereco?: Endereco;
}

export interface Usuario {
  id?: number;
  login: string;
  senha: string;
  email: string;
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
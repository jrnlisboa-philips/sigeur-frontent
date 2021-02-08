import { Cargo } from './cargo';
import { Perfil } from './perfil';

export interface Usuario {
  id?: string;
  nome?: string;
  cpf?: string;
  dataNascimento?: Date;
  sexo?: string;
  cargo?: Cargo;
  perfils?: Perfil[];
  dataCriacao?: Date;
}

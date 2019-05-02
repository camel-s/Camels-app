import { Usuario } from './usuario.model';
import { Especializacao } from './especializacao.model';
import { Servico } from './servico.model';

export class Oferente extends Usuario{
    public especializacoes: Especializacao[]
    public servicos: Servico[]
}
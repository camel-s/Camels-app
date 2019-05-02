import { AreaAtuacao } from './areaAtuacao.model';

export class Servico{
    public id: string
    public titulo: string
    public descricao: string
    public areaAtuacao: AreaAtuacao
    public preco: number
    public anexo: string
}
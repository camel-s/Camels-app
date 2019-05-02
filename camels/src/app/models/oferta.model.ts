import { Servico } from './servico.model';

export class Oferta{
    public id: number
    public titulo: string
    public descricao: string
    public anexo: string
    public servicos: Servico[]
    public idContratante: number
    public idOferente: number 
}
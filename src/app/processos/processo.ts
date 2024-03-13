import { Advogado } from '../advogados/advogado';
import { Comarca } from '../Comarca/comarca';
import { Cliente } from './../clientes/cliente';
export interface Processo {
    id: number;
    numero: number;
    tipo: string;
    procedimento: string;
    comarca: Comarca;
    vara: string;
    resultadoRecurso: string;
    cliente: Cliente;
    advogado: Advogado;
}
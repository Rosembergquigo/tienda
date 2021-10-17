import { Orden } from "./orden";

export class Recibo {
    id_recibo : number = 0;
    fecha:string ='';
    cedula : string ='';
    productos: Array<Orden> = [];
    valor_total: number = 0;
}
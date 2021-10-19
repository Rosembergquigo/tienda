import { Producto } from "./producto";

export class Orden {
    producto: Producto = new Producto();
    cantidad: number = 0;
    valor_total: number= 0;
}
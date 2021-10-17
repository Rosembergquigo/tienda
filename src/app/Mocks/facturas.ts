import { Producto } from '../../app/model/producto';
import { Recibo } from '../model/recibo';

export const recibo :Recibo [] =
[
    {
        id_recibo : 1,
        fecha: '22-09-2021',
        cedula : "10203040",
        productos : [
            {
               producto:
               {
                id_producto: 1,
                cantidad: 100,
                precio: 500,
                descripcion: 'Panela'
               },
               cantidad : 2,
               valor_total : 1000,
            },
            {
                producto:
               {
                id_producto: 2,
                cantidad: 50,
                precio: 1000,
                descripcion: 'aceite 200ml'
               },
               cantidad : 3,
               valor_total : 3000,
            }
        ],
        valor_total : 4000,
    },
    {
        id_recibo : 2,
        fecha: '21-09-2021',
        cedula : "40506070",
        productos : [
            {
               producto:
               {
                id_producto: 3,
                cantidad: 100,
                precio: 1500,
                descripcion: 'Arroz Diana 500gr'
                },
               cantidad : 2,
               valor_total : 3000,
            },
            {
                producto:
                {
                    id_producto: 4,
                    cantidad: 100,
                    precio: 2500,
                    descripcion: 'Café 100gr'
                },
               cantidad : 3,
               valor_total : 7500,
            }
        ],
        valor_total : 10500,
    }
]
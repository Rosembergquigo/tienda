import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { productos } from 'src/app/Mocks/inventario';
import { Producto } from '../model/producto';
import { Orden } from '../model/orden';
import { Recibo } from '../model/recibo';

@Component({
  selector: 'app-mod-caja',
  templateUrl: './mod-caja.component.html',
  styleUrls: ['./mod-caja.component.css']
})
export class ModCajaComponent implements OnInit {

  productos = productos;
  productosSelect: Array<Producto> = [];
  ordenesSelect: Array<Orden> = [];
  recibo: Recibo = new Recibo();
  cantidadCero: number = 1;
  constructor(
    private srvProduct: ProductServiceService
  ) {
    this.productos = Array<Producto>();
    this.productos.map(re=>{
      re.checked = false;
    });
   }

  ngOnInit() {
    this.srvProduct.getProduct().subscribe(
      products => { 
        console.log(products)
        
        this.productos = products 
      })
  }

  seleccionarItems()
  {
    const array= this.productos.filter(data => data.checked === true)
    console.log ('array select', array)
    for (let i in array)
    {
      this.ordenesSelect[i] = new Orden()
      this.ordenesSelect[i].producto = array[i]
      this.ordenesSelect[i].cantidad = 0
      this.ordenesSelect[i].valor_total = array[i].precio * this.ordenesSelect[i].cantidad
    }
    console.log('orden select', this.ordenesSelect)
    
    /*
    this.productosSelect.map(function(dato){
      dato.cantidad = 1
    })*/
    this.productosSelect = array
    console.log ('productos select', this.productosSelect)
  }

  cambiarValorTotal(id_Producto: number)
  {
    for (let i in this.ordenesSelect) {
      if(this.ordenesSelect[i].producto.id_Producto === id_Producto)
      {
        this.ordenesSelect[i].cantidad += 1
        this.ordenesSelect[i].valor_total = this.ordenesSelect[i].producto.precio * this.ordenesSelect[i].cantidad

        this.recibo.valor_total += this.ordenesSelect[i].valor_total
      }
    }
  }

}

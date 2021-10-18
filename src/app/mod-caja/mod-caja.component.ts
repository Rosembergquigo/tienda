import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { productos } from 'src/app/Mocks/inventario';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-mod-caja',
  templateUrl: './mod-caja.component.html',
  styleUrls: ['./mod-caja.component.css']
})
export class ModCajaComponent implements OnInit {

  productos = productos;
  productosSelect : Array<Producto>;
  cantidadCero: number = 1
  constructor(
    private srvProduct: ProductServiceService
  ) {
    this.productos = Array<Producto>();
    this.productos.map(re=>{
      re.checked = false;
    });
    this.productosSelect = [];
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
    this.productosSelect = array
    
    this.productosSelect.map(function(dato){
      dato.cantidad = 1
    })
    console.log ('productos select', this.productosSelect)
  }

  cambiarValorTotal(id_Producto: number)
  {
    for (let i in this.productosSelect) {
      if (this.productosSelect[i].id_Producto === id_Producto) {
        //this.productosSelect[i].cantidad +=1
        this.productosSelect[i].precio = this.productosSelect[i].precio * this.productosSelect[i].cantidad
      }            
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/Mocks/inventario';
import { Producto } from '../model/producto';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-mod-admin',
  templateUrl: './mod-admin.component.html',
  styleUrls: ['./mod-admin.component.css']
})


export class ModAdminComponent implements OnInit {

  /*producto = productos;*/
  productos = productos;
  /*productos: Producto[];*/
  result : string = ""
  constructor(
    private srvProduct: ProductServiceService
  ) { 
    this.productos = Array<Producto>();
  }

  ngOnInit(){
    console.log(typeof this.productos)
    this.srvProduct.getProduct().subscribe(
      products => { 
        console.log(products)
        
        this.productos = products 
      })
    console.log('result getProds: ', this.productos)
  }

  delete(prod: Producto)
  {
    this.srvProduct.delete(prod.id_Producto).subscribe(
      response => this.result = response.toString()
    )
  }

  prodId()
  {
    
  }

  cargarprod()
  {
    this.srvProduct.getProduct().subscribe(
      products => { 
        console.log(products)
        
        this.productos = products 
      })
  }
}

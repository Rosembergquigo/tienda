import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { productos } from 'src/app/Mocks/inventario';
import { Producto } from '../model/producto';
import { Orden } from '../model/orden';
import { Recibo } from '../model/recibo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mod-caja',
  templateUrl: './mod-caja.component.html',
  styleUrls: ['./mod-caja.component.css'],
  providers: [DatePipe]
})
export class ModCajaComponent implements OnInit {

  productos = productos;
  productosSelect: Array<Producto> = [];
  ordenesSelect: Array<Orden> = [];
  recibo: Recibo = new Recibo();
  reciboVal_Total:number = 0 
  constructor(
    private srvProduct: ProductServiceService,
    private datePipe: DatePipe
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
      }
      /*this.ordenesSelect.forEach(element => {
        element.valor_total
        console.log('elemento valor total',element.valor_total)
        /*this.recibo.valor_total += element.valor_total
        console.log('recibo valor total', this.recibo.valor_total)
        this.reciboVal_Total.push(element.valor_total)
        
      });*/
    }
    this.actualizarTotal()
  }

  actualizarTotal()
  {
    this.reciboVal_Total = 0
     for(let i in this.ordenesSelect)
     {
       this.reciboVal_Total += this.ordenesSelect[i].valor_total
     }
  }

  guardarCompra()
  {
    this.recibo.id_recibo = 0
    /*this.recibo.fecha = this.datePipe.transform(Date.now().toString(), 'yyyy-MM-dd'); */
    var date = new Date();
    var datenow = this.datePipe.transform(date,"yyyy-MM-dd")
    console.log('date', this.datePipe.transform(date,"yyyy-MM-dd"));
    this.recibo.fecha =  datenow!=null ? datenow : 'que hay aqui?'; 
    this.recibo.productos = this.ordenesSelect
    this.recibo.valor_total = this.reciboVal_Total

    console.log('Recibo: ', this.recibo)

    this.srvProduct.crearPedido(this.recibo).subscribe(
      
    )
  }

}

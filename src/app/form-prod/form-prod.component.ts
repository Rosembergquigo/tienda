import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../model/producto';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-form-prod',
  templateUrl: './form-prod.component.html',
  styleUrls: ['./form-prod.component.css']
})
export class FormProdComponent implements OnInit {

  public producto : Producto=new Producto();
  titulo : string = "Formulario"
  result : string = ""
  constructor(
    public prodServ: ProductServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarProducto,
    this.cargarProducto()
  }

  cargarProducto():void
  {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log('id: ',id)
      if(id){
        this.prodServ.getProductoId(id).subscribe( (producto: Producto)  => this.producto = producto)
      }
    })
  }

  update()
  {
    this.prodServ.update(this.producto)
      .subscribe(data => this.result = data.toString()
      )
  }

}

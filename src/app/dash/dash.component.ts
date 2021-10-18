import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { convertToObject } from 'typescript';
/*import swal from 'sweetalert';*/
import { Producto } from '../model/producto';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  closeResult = '';
  fecha = Date.now();
  form!: FormGroup;
  product! : Producto;
  
  constructor(
    private modalService: NgbModal,
    public producto: ProductServiceService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    console.log('date: ', this.fecha)
    this.fecha;
  }

  private buildForm()
  {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      cant: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required])
    });

    /*this.form.valueChanges
    .subscribe(value=>{
      console.log(value);
    });*/
  }

  save(event: Event)
  {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
    this.product = new Producto;
    this.product.cantidad = parseInt(this.form.value.cant);
    this.product.precio = parseInt(this.form.value.price);
    this.product.descripcion = this.form.value.name;
    console.log('producto: ', this.product);
    this.producto.create(this.product)
    .subscribe(response => {
      
      
      /*swal('Nuevo Producto',`Cliente ${this.product.descripcion} creado Producto con exito`,'success')*/
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

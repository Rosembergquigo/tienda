import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { recibo } from '../Mocks/facturas';
import { Orden } from '../model/orden';
import { ProductServiceService } from '../service/product-service.service';



@Component({
  selector: 'app-mod-pedido',
  templateUrl: './mod-pedido.component.html',
  styleUrls: ['./mod-pedido.component.css']
})
export class ModPedidoComponent implements OnInit {

  pedidos = recibo;
  closeResult = '';

  constructor(
    private srvProduct: ProductServiceService,
    private modalService: NgbModal
   ) { }

  ngOnInit(): void {
    this.srvProduct.getPedidos().subscribe(
      data => {
        this.pedidos = data
      }
    );
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

import { Component, OnInit } from '@angular/core';
import { recibo } from '../Mocks/facturas';


@Component({
  selector: 'app-mod-pedido',
  templateUrl: './mod-pedido.component.html',
  styleUrls: ['./mod-pedido.component.css']
})
export class ModPedidoComponent implements OnInit {

  pedidos = recibo;
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FormProdComponent } from './form-prod/form-prod.component';
import { ModAdminComponent } from './mod-admin/mod-admin.component';
import { ModCajaComponent } from './mod-caja/mod-caja.component';
import { ModPedidoComponent } from './mod-pedido/mod-pedido.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';

const routes: Routes = [
  {path: '', component: DashComponent},
  {path: 'ModPay', component: ModCajaComponent},
  {path: 'modAdmin', component: ModAdminComponent},
  {path: 'modPedido', component: ModPedidoComponent},
  {path: 'producto/form/:id', component: FormProdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

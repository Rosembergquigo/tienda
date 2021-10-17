import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ModAdminComponent } from './mod-admin/mod-admin.component';
import { ModCajaComponent } from './mod-caja/mod-caja.component';
import { ModPedidoComponent } from './mod-pedido/mod-pedido.component';

const routes: Routes = [
  {path: '', component: DashComponent},
  {path: 'ModPay', component: ModCajaComponent},
  {path: 'modAdmin', component: ModAdminComponent},
  {path: 'modPedido', component: ModPedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

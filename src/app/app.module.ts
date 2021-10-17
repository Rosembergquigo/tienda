import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModCajaComponent } from './mod-caja/mod-caja.component';
import { ModAdminComponent } from './mod-admin/mod-admin.component';
import { DashComponent } from './dash/dash.component';
import { ModPedidoComponent } from './mod-pedido/mod-pedido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModCajaComponent,
    ModAdminComponent,
    DashComponent,
    ModPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

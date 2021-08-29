import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModCajaComponent } from './mod-caja/mod-caja.component';
import { ModAdminComponent } from './mod-admin/mod-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModCajaComponent,
    ModAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

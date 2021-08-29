import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModAdminComponent } from './mod-admin/mod-admin.component';
import { ModCajaComponent } from './mod-caja/mod-caja.component';

const routes: Routes = [
  {path: '', component: ModCajaComponent},
  {path: 'modAdmin', component: ModAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

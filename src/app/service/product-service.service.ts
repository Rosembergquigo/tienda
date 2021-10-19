import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
import { Productos } from '../model/productos';
import { Recibo } from '../model/recibo';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  
  url = environment.urlApi;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  

  constructor(private http:HttpClient) { }

  create(producto: Producto) {
    return this.http.post(this.url + 'crearProducto', producto, {headers: this.httpHeaders})
  }

  getProduct(){
    return this.http.get<Producto[]>(this.url + 'crearProductos');
  }

  getProductoId(id: number)
  {
    console.log(this.url,'/crearProductos/',id)
    return this.http.get<Producto>(`${this.url}crearProductos/${id}`)
  }

  update(producto: Producto)
  {
    return this.http.post(this.url + 'editarProducto', producto, {headers: this.httpHeaders})
  }

  delete(id: any) {
    return this.http.delete(`${this.url}editarProductos/${id}`)
  }

  crearPedido(recibo: Recibo)
  {
    return this.http.post(this.url + 'Pedido', recibo, {headers: this.httpHeaders})
  }
}

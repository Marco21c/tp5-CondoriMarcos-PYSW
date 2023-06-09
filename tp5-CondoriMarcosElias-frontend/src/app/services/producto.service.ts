import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }
  
  urlBase:string = "http://localhost:3000/api/"

  getProductos():Observable<any>{
   const httpOptions = {
    headers: new HttpHeaders({

    }),
    params: new HttpParams()
   }

   return this._http.get(this.urlBase+"producto/destacados",httpOptions); 
  }
  postProducto(producto:Producto):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
         "Content-type":"application/json"
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(producto);
    return this._http.post(this.urlBase+"producto",body,httpOptions); 
  }

}

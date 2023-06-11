import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase:string = "http://localhost:3000/api/";
  constructor(private _http:HttpClient) { }

  getTransacciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
  
      }),
      params: new HttpParams()
     }
  
     return this._http.get(this.urlBase+"transaccion",httpOptions); 
    }
    getTransaccionesxTipo(origen:string,destino:string):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
    
        }),
        params: new HttpParams().append('monedaOrigen',origen).append('monedaDestino',destino)
       }
    
       return this._http.get(this.urlBase+"transaccion",httpOptions); 
    } 
    postTransacccion(transaccion:Transaccion):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type":"application/json"
        }),
        params: new HttpParams()
       }
       let body = JSON.stringify(transaccion);
       return this._http.post(this.urlBase+"transaccion",body,httpOptions); 
    }
    
    postConvert(from:string,to:string,value:string):Observable<any>{
      let httpsOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'c9742c5c74mshd1639e3785d3d9dp1c7e49jsn76c8af779db1',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
      let body = {
           "from-value": value,
        "from-type": from,
        "to-type": to
      }
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpsOptions);
      }
    
      obtenerCodigos():Observable<any>{
        let httpOption = {
          headers: new HttpHeaders({
            'X-RapidAPI-Key': 'c9742c5c74mshd1639e3785d3d9dp1c7e49jsn76c8af779db1',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
          })
        } 
        return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",httpOption);
    }
}

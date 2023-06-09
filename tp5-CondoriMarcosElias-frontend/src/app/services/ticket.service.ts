import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  urlBase:string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }
  
  getTickets():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+"ticket",httpOptions);
  }
  getTicketsxCategoria(categoria:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().append('categoriaEspectador',categoria)
    }
    return this._http.get(this.urlBase+"ticket",httpOptions);
  }
   deleteTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.delete(this.urlBase+"ticket/"+id,)
   }
   postTicket(ticket:Ticket):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
         "Content-type":"application/json"
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);
    return this._http.post(this.urlBase+"ticket",body,httpOptions); 
  }
   getEspectadores():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+"espectador",httpOptions);
   }
   getTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase+"ticket/"+id,httpOptions);
   }
   putTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
      }),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);
    return this._http.put(this.urlBase+"ticket/"+ticket._id,body,httpOptions);
   }
}

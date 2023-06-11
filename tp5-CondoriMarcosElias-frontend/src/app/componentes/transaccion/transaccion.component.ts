import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent {
  transacciones:Array<Transaccion> = new Array<Transaccion>();
  origen!:string;
  destino!:string;
  divisas:Array<string> = new Array<string>();
  divisas2:Array<string> = new Array<string>();


   constructor(private transaccionService:TransaccionService,private router:Router){
   
    this.listarTransacciones();
   }

   listarTransacciones(){
    this.divisas = new Array<string>
    this.transacciones = new Array<Transaccion>();
       this.transaccionService.getTransacciones().subscribe(
       result=>{
            result.forEach((element:any) => {
              let transaccion:Transaccion = new Transaccion();
              Object.assign(transaccion,element);
              this.transacciones.push(transaccion);
              transaccion = new Transaccion(); 
            });
            this.transacciones.forEach((element:any) => {
                
                this.divisas.push(element.monedaOrigen);
                this.divisas = Array.from(new Set(this.divisas));
                this.divisas2.push(element.monedaDestino);
                this.divisas2 = Array.from(new Set(this.divisas2));
            });
        },
       error=>{
            console.error(error);
       }
       )
   }
   listarTransaccionesxTipo(){
    this.transacciones = new Array<Transaccion>();
    this.transaccionService.getTransaccionesxTipo(this.origen,this.destino).subscribe(
    result=>{
         result.forEach((element:any) => {
           let transaccion:Transaccion = new Transaccion();
           Object.assign(transaccion,element);
           this.transacciones.push(transaccion);
           transaccion = new Transaccion(); 
         });
    },
    error=>{
         console.error(error);
    }
    )
   }
   irFormulario(){
        this.router.navigate(['formTransaccion',0])
   }
}

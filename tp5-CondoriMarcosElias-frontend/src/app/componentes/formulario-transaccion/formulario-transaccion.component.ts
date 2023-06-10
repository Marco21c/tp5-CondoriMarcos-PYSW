import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-formulario-transaccion',
  templateUrl: './formulario-transaccion.component.html',
  styleUrls: ['./formulario-transaccion.component.css']
})
export class FormularioTransaccionComponent {
 
  transaccion:Transaccion  = new Transaccion;
  divisas!:Array<any>;
 
       constructor(private router:Router,private transaccionService:TransaccionService){     
         this.listarDivisas();
               
       }
      
      listarDivisas(){
        this.transaccionService.obtenerCodigos().subscribe(
          result=>{
            console.log(result);
              this.divisas = result;
          },
          error => {
                console.error(error); 
          }
        )
      } 
        
      volver(){
        this.router.navigate(['transaccion']);
      }
      
      convertir(){
        let cantidad = String(this.transaccion.cantidadOrigen);
        this.transaccionService.postConvert(this.transaccion.monedaOrigen,this.transaccion.monedaDestino,cantidad).subscribe(
         result =>{
           console.log(result);
           this.transaccion.cantidadDestino = result.result;  
           this.transaccion.tasaConversion = this.transaccion.cantidadOrigen / this.transaccion.cantidadDestino;

           this.transaccionService.postTransacccion(this.transaccion).subscribe(
                      result =>{
                        console.log(result);
                         },
                      error =>{
                          console.log(error);
                      })  
              
          },
         error =>{
           console.error(error);
         }

        )
      }

}

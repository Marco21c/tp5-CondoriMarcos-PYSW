import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.css']
})
export class FormularioTicketComponent {
ticket:Ticket= new Ticket;
accion!:string;  
espectadores!: Array<Espectador> ;  
  constructor(private activateRoute:ActivatedRoute,private ticketService:TicketService,private router:Router){

    this.cargarEspectadores();
  }

  ngOnInit():void{
    this.activateRoute.params.subscribe(
     params => {
       if(params['id']=="0"){
         this.accion = "new"
       }
       else{
         this.accion = "update";
         this.cargarForm(params['id']);
       }
     });
  }

  cargarForm(id:string){
    
  }
  cargarEspectadores(){
    this.espectadores = new Array<Espectador>();    
    this.ticketService.getEspectadores().subscribe(
      result=>{
        console.log(result);
        result.forEach((element:any) => {
          let espectador:Espectador = new Espectador();
          Object.assign(espectador,element);
          this.espectadores.push(espectador);
          espectador = new Espectador();
        });           
      },
      error => {
        console.error(error);
      })
  }
  guardarTicket(){
    this.ticketService.postTicket(this.ticket).subscribe(
      result=>{
         console.log(result);
      },
      error=>{
        console.error(error);
      }
    )
    this.router.navigate(['tickets']);
  }
  volver(){
    this.router.navigate(['tickets']);
  }
}

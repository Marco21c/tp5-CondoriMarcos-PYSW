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
ticket!:Ticket;
accion!:string;  
espectadores: Array<Espectador> = new Array<Espectador>();  
  constructor(private activateRoute:ActivatedRoute,private ticketService:TicketService,private router:Router){
  }

  ngOnInit():void{
    this.activateRoute.params.subscribe(
     params => {
       if(params['id']=="0"){
         this.accion = "new";
         this.ticket = new Ticket();
         this.cargarEspectadores();
        
       }
       else{
         this.accion = "update";
         this.ticket = new Ticket();
         this.cargarTicket(params['id']);
       }
     });
  }

  async cargarTicket(id:string){
    await this.cargarEspectadores();
    this.ticketService.getTicket(id).subscribe(
      result=>{
          
           Object.assign(this.ticket,result);
           this.ticket.espectador = this.espectadores.find(a=>(a._id==this.ticket.espectador._id))!;
      },
      error=>{
           console.error(error);
      }
       
    )
  }
  async cargarEspectadores(){
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
  modificarTicket(){
    this.ticketService.putTicket(this.ticket).subscribe(
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

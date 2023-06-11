import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets!: Array<Ticket>;
  categoria!:string;
  constructor(private ticketService:TicketService, private router:Router){
    
    this.obtenerTickets();
  }

  obtenerTickets(){
    this.tickets = new Array<Ticket>();
    this.ticketService.getTickets().subscribe(
      result=>{
        result.forEach((element:any) => {
          let ticket:Ticket = new Ticket();
          Object.assign(ticket,element);
          this.tickets.push(ticket);
          ticket = new Ticket();
        });           
      },
      error => {
        console.error(error);
      })
   }
   obtenerTicketsxCategoria(){
    this.tickets = new Array<Ticket>();
    this.ticketService.getTicketsxCategoria(this.categoria).subscribe(
      result=>{
        console.log(result);
        result.forEach((element:any) => {
          let ticket:Ticket = new Ticket();
          Object.assign(ticket,element);
          this.tickets.push(ticket);
          ticket = new Ticket();
        });           
      },
      error => {
        console.error(error);
      })
   }

   nuevoTicket(){
    this.router.navigate(['formTicket','0']);
   }
   editarTicket(ticket:Ticket){
    this.router.navigate(['formTicket',ticket._id]);
   }
   eliminarTicket(ticket:Ticket){
     this.ticketService.deleteTicket(ticket._id).subscribe(
      result=>{
          console.log(result);
          this.obtenerTickets(); //actualizar listado
      },
      error=>{
          console.error(error);
      }
     )
    }

}
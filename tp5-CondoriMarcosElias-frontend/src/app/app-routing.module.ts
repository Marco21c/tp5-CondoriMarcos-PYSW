import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './componentes/producto/producto.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';
import { TransaccionComponent } from './componentes/transaccion/transaccion.component';
import { FormularioTransaccionComponent } from './componentes/formulario-transaccion/formulario-transaccion.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { FormularioTicketComponent } from './componentes/formulario-ticket/formulario-ticket.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'formProducto/:id', component: FormularioProductoComponent },
  { path: 'transaccion', component:TransaccionComponent},
  { path: 'formTransaccion/:id',component:FormularioTransaccionComponent},
  { path: 'tickets', component:TicketComponent},
  { path: 'formTicket/:id',component:FormularioTicketComponent},
  { path: '**', pathMatch:'full', redirectTo:'productos'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
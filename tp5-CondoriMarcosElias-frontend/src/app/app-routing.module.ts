import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './componentes/producto/producto.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';
import { TransaccionComponent } from './componentes/transaccion/transaccion.component';
import { FormularioTransaccionComponent } from './componentes/formulario-transaccion/formulario-transaccion.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'formProducto/:id', component: FormularioProductoComponent },
  { path: 'transaccion', component:TransaccionComponent},
  { path: 'formTransaccion/:id',component:FormularioTransaccionComponent},
  { path: '**', pathMatch:'full', redirectTo:'productos'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
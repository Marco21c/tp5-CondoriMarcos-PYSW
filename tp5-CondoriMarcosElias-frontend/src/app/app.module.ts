import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TransaccionComponent } from './componentes/transaccion/transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    NavbarComponent,
    FormularioProductoComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

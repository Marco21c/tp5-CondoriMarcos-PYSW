import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
    
  productos:Array<Producto>;

   constructor(private productoService:ProductoService,private router:Router){
    this.productos = new Array<Producto>();
    this.obtenerProductos();
   }

   obtenerProductos(){
    this.productoService.getProductos().subscribe(
      result=>{
        result.forEach((element:any) => {
          let producto:Producto = new Producto();
          Object.assign(producto,element);
          this.productos.push(producto);
          producto = new Producto();
        });           
      },
      error =>{
            console.error(error);
      }

    )   
   }
   

   agregarProducto(){
     this.router.navigate(['formProducto',0]);
   }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
accion:string = '';
nuevoProducto:Producto = new Producto();
   constructor(private activateRoute: ActivatedRoute, private productoService:ProductoService,private router:Router ){}

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
    //editar Productos
   }

   volver(){
    this.router.navigate(['productos']);
   }

   guardarProducto(){
    this.productoService.postProducto(this.nuevoProducto).subscribe(
     result => {
      console.log(result);
     },
     error => {
      console.log(error);
     })
    this.router.navigate(['productos']);
   }
}

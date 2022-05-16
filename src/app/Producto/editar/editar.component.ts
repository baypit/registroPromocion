import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  personaEdit:Persona=new Persona("1","1","1","1");
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = localStorage.getItem("id");
    console.log("id --"+id);
    if(id != null){
      this.service.getProductoId(+id).subscribe(data=>{
        this.personaEdit=data;
        console.log("Producto "+ this.personaEdit.nombre);
      })
    }
   
  }

  actualizar(producto:Persona){
    this.service.updateProducto(producto).subscribe(data=>{
      this.personaEdit = data;
      alert("Se actualizo el producto");
      this.router.navigate(["listar"]);
    })
  }


}

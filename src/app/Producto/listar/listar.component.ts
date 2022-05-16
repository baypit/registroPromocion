import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[] | undefined;
  
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar(){
    this.service.getProductos().subscribe(data =>{
      this.personas=data;
    });
  }
  editar(producto:Persona): void{
    if (producto.id != null ) {
      localStorage.setItem("id",producto.id.toString());
    }
    
    this.router.navigate(["edit"]);
  }

  Eliminar(persona:Persona){
    this.service.deletePersona(persona).subscribe(data=>{
      //if(this.personas != undefined){
        //this.personas=this.personas.filter(p=>p!==persona);
        alert("Se elimino la persona...");
        this.refrescar();
      //}
    })
  }

  nuevo(){
    this.router.navigate(["add"]);   
   }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
 
})

export class AddComponent implements OnInit {

  producto:Persona | undefined;
  promo: string  | undefined ;

  constructor(private router:Router, private service:ServiceService) {
    this.promo = "SK";
   }

  ngOnInit(): void {
  }

  

  prepararParaGuardar(name: string, mail: string, telefono: string){
    this.producto = new Persona(name,mail ,telefono, this.promo+"","");
    console.log(name);
    console.log(this.promo);
    console.log(mail);
    console.log(this.producto.nombre);
    console.log(this.producto.telefono);
    this.Guardar(this.producto);
  }

  Guardar(persona:Persona){
    this.service.createProducto(persona).subscribe(data=>{
      alert("Se agrego con exito !!!");
      this.router.navigate(["listar"]);
    })
  }

  listar(){
    this.router.navigate(["listar"]);   
   }

}

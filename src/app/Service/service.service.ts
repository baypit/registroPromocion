import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url='http://localhost:8080/api/personas';

  
  getProductos(){
    return this.http.get<Persona[]>(this.Url);
  }

  createProducto(persona: Persona){
    let Url='http://localhost:8080/api/registroPersona';
    return this.http.post<Persona>(Url,persona);
  }

  getProductoId(id:number){
    console.log("id "+id)
    let Url='http://localhost:8080/api/listarPersonaId';
    return this.http.post<Persona>(Url,id);
  }

  updateProducto(persona:Persona){
    console.log("ipersona "+persona.id);
    console.log("ipersona nombre "+persona.nombre);
    let Url='http://localhost:8080/api/editarPersona';
    return this.http.post<Persona>(Url, persona);
   
  }


  deletePersona(persona:Persona){
    let id = persona.id;
    console.log("ipersona "+persona.id);
    console.log("ipersona nombre "+persona.nombre);
    let Url='http://localhost:8080/api/deletePersonaId';
    return this.http.post<Persona>(Url,id);
   
  }

}

export class Persona{

    

    id:number | undefined;
    nombre:string;
    email:string;
    telefono:string;
    grupo:string;
    beneficio:string;

    constructor(name: string, valor: string, cantidad: string, grupo:string, beneficio:string){
        this.nombre = name;
        this.email = valor;
        this.telefono = cantidad;
        this.grupo = grupo;
        this.beneficio = beneficio;
    }

   
}
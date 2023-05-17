//creando una clase que contruya objetos tipo empleado
export class Empleado{

//creando un constructor
constructor(nombre:string, apellido:string,cargo:string,experiencia:number,salario:number){
//inicicar campos de clase
this.nombre=nombre;
this.apellido=apellido;
this.cargo=cargo;
this.experiencia=experiencia;
this.salario=salario;

}
//creando variables
  nombre:string="";
  apellido:string="";
  cargo:string="";
  experiencia:number=0;
  salario:number=0;
}

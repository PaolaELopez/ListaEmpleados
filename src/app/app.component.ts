import { Component } from '@angular/core';
import { Empleado } from './empleado.module';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REGISTRAR EMPLEADOS';
  titleTabla = "LISTADO DE EMPLEADOS"

  constructor(private miServicio:ServicioEmpleadosService){

  }

  empleados: Empleado[] = [
    new Empleado("Paola", "Estupiñan", "Desarrolladora frontend", 3,  7000000),
    new Empleado("Amanda", "Lopez", "Asesora comercial", 1, 2000000),
    new Empleado("Diego", "Duque", "Desarrollador Senior Backend", 6,  15000000)
  ];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroExperiencia: number = 0;
  cuadroSalario: number = 0;

  guardarClientes() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroExperiencia, this.cuadroSalario);
    this.miServicio.muestraMensaje("Se va a registar el empleado con nombre de: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }


}

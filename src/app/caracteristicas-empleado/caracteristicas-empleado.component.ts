import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output () caracteristicasEmpleados = new EventEmitter<string>();
  constructor(private miServicioCaracteristicas:ServicioEmpleadosService){

  }

  agregarCaracteristicas(value: string) {
    this.miServicioCaracteristicas.muestraMensaje("Se va agregar la siguiente caracteristica: " + value);
    this.caracteristicasEmpleados.emit(value);

  }
}

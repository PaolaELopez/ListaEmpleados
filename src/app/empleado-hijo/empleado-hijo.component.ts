import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.module';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {


 @Input() empleadoDeLista:Empleado;
 @Input() indice:number;

 arrayCaracteristicas = [''];

 agregarCaracteristicaPadre(nuevaCaracteristica: string) {
   this.arrayCaracteristicas.push(nuevaCaracteristica);
 }
}

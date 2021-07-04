import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[] = [
    new Empleado("Frida", "Benitez", "Marketing", 3000),
    new Empleado("Daniela", "Valdéz", "Contadora", 3000),
    new Empleado("Daniela", "Arizmendi", "Biotecnologa", 3000),
    new Empleado("Mariza", "Cisneros", "Arquitecta", 3000)
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}

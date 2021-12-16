import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Registro de Usuarios';
  mensaje:string = "";
  registrado: boolean = false;
  nombre:string = "";
  apellido:string = "";
  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito con el nombre de: ";
  }
}

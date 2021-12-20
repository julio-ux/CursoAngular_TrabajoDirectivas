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
  entradas: any;

  constructor(){
    this.entradas = [
      {titulo:"Pyhton cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedo pascal?"},
    ]
  }
  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con exito con el nombre de: ";
  }
}

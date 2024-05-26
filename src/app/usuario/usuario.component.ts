import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  usuarios: any[] = [];

  agregarUsuario() {
    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      fechaNacimiento: this.fechaNacimiento
    };
    this.usuarios.push(nuevoUsuario);
    this.resetFormulario();
  }

  resetFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.fechaNacimiento = '';
  }
}

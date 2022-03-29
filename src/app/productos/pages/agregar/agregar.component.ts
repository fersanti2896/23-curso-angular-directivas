import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  color: string = 'red';
  texto1: string = 'Fer Santi'

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required ] ]
  });

  constructor(private fb: FormBuilder) { }

  validacionCampo( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = 'Sarahi'  
  }

  cambiarColor() {
    this.color = 'green';
  }
}

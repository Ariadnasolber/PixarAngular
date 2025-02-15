import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  personas = [
    {
      nombre: 'Juan',
      apellido1: 'Perez',
      edad: 30
    },
    {
      nombre: 'Maria',
      apellido1: 'Gonzalez',
      edad: 25
    },
    {
      nombre: 'Pedro',
      apellido1: 'Jimenez',
      edad: 35
    }
  ];

}

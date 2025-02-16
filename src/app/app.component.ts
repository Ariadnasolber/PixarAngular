import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { DynamicFilmComponent } from './components/dynamic-film/dynamic-film.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [
    RouterOutlet,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DynamicFilmComponent,
    RouterModule // Agrega RouterModule aquí
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miProyectoAngular';
}
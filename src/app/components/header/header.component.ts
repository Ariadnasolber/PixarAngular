import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-header',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [
    CommonModule,
    RouterModule // Agrega RouterModule aquí
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = [
    {
      title: 'FILMS',
      id: 'filmsDropdown',
      subItems: [
        { title: 'FEATURE FILMS', routerLink: '/features' },
        { title: 'SHORT FILMS', routerLink: '/shorts' },
        { title: 'SERIES', routerLink: '/series' },
        { title: 'SPARKSHORTS', routerLink: '/sparkshorts' },
        { title: 'DOCUMENTARIES', routerLink: '/documentaries' }
      ]
    },
    {
      title: 'TECHNOLOGY',
      id: 'techDropdown',
      subItems: [
        { title: 'TECH AT PIXAR', routerLink: '/tech' },
        { title: 'RENDERMAN', routerLink: '/renderman' },
        { title: 'OPENUSD', routerLink: '/openusd' },
        { title: 'SOFTWARE R&D', routerLink: '/software-rd' },
        { title: 'LIBRARIES', routerLink: '/libraries' }
      ]
    },
    {
      title: 'CAREERS',
      id: 'careersDropdown',
      subItems: [
        { title: 'CAREERS AT PIXAR', routerLink: '/careers' },
        { title: 'INTERNSHIPS', routerLink: '/internships' },
        { title: 'LIFE AT PIXAR', routerLink: '/life-at-pixar' }
      ]
    },
    {
      title: 'MORE',
      id: 'moreDropdown',
      subItems: [
        { title: 'LEADERS', routerLink: '/leaders' },
        { title: 'OUR STORY', routerLink: '/our-story' },
        { title: 'EVENTS', routerLink: '/events' },
        { title: 'PIXAR IN A BOX', routerLink: '/pixar-in-a-box' },
        { title: 'SUPPLIER DIVERSITY', routerLink: '/supplier-diversity' },
        { title: 'FAQ’S', routerLink: '/faqs' }
      ]
    }
  ];
}
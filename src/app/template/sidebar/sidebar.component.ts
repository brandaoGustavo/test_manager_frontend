import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      children: [
        {
          title: 'Usuarios',
          link: 'usuarios',
        },
      ],
    },
    {
      title: 'Exemplos',
      icon: 'layers-outline',
      expanded: true,
      children: [
        {
          title: 'Home',
          link: 'home',
        },
        {
          title: 'Integração microsserviços',
          link: 'integracao',
        },
        {
          title: 'Formulários',
          link: 'formularios',
        },
        {
          title: 'Tabela',
          link: 'tabela',
        },
      ],
    },
    {
      title: 'Nebular components',
      icon: 'grid-outline',
      url: 'https://akveo.github.io/nebular/docs/components/components-overview'
    },
    {
      title: 'Eva icons',
      icon: 'flag-outline',
      url: 'https://akveo.github.io/eva-icons/#/'
    },
  ];
}

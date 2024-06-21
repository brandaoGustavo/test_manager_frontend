import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private themeService: NbThemeService, private sidebarService: NbSidebarService) {}

  currentTheme = new FormControl('');

  themes = [
    'dark',
    'default',
    'cosmic',
    'corporate'
  ];

  changeTheme(theme: string): void{
    this.themeService.changeTheme(theme);
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}

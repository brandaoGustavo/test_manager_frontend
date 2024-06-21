import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedUser: string = "User 01";

  userPictureOnly: boolean = true;

  userMenu = [ { title: 'Meu Perfil' }, { title: 'Sair'} ];

  currentTheme = new FormControl('corporate');

  themes = [
    'dark',
    'cosmic',
    'corporate'
  ];

  constructor(private themeService: NbThemeService, private sidebarService: NbSidebarService, private menuService: NbMenuService,) {}

  ngOnInit(): void {

    this.menuService.onItemClick().subscribe((event) => {
    });
  }

  changeTheme(theme: string): void{
    this.themeService.changeTheme(theme);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
}

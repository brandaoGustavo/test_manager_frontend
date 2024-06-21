import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {}

  redirectToLogin(){

  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return true;
  }  
}
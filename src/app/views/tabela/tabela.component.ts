import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent {  
  usuarios: any[] = [
    {nome: "Usuario1",
    email: "email1@email.com",
    perfil: "Administrador"},
    {nome: "Usuario2",
    email: "email2@email.com",
    perfil: "Estagiário"},
    {nome: "Usuario3",
    email: "email3@email.com",
    perfil: "Junior"},
    {nome: "Usuario4",
    email: "email4@email.com",
    perfil: "Senior"},
  ];
}

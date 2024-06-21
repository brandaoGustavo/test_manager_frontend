import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TabelaComponent } from './views/tabela/tabela.component';
import { FormulariosComponent } from './views/formularios/formularios.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { TestCaseManagerComponent } from './views/test-case-manager/test-case-manager.component';
import { TestCaseFormComponent } from './views/test-case-form/test-case-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'tabela', component: TabelaComponent, pathMatch: 'full'},
  { path: 'formularios', component: FormulariosComponent, pathMatch: 'full'},
  { path: 'test_case/manager', component: TestCaseManagerComponent, pathMatch: 'full'},
  { path: 'test_case/new', component: TestCaseFormComponent, pathMatch: 'full'},
  { path: 'test_case/detail/:id', component: TestCaseFormComponent, pathMatch: 'full'},

  { path: '', redirectTo: "home", pathMatch: 'full'},
  { path: 'authorized', redirectTo: "auth", pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

// { path: 'usuarios', component: UsuariosComponent, pathMatch: 'full', data: { role: 'ROLE_USERS' }},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


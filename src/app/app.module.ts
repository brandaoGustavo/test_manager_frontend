import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSelectModule, NbButtonModule, NbInputModule, NbCardModule, NbSidebarModule, NbUserModule, NbActionsModule, NbIconModule, NbContextMenuModule, NbMenuModule, NbCheckboxComponent, NbCheckboxModule, NbRadioComponent, NbRadioModule, NbTooltipModule, NbAccordionModule, NbListModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { TabelaComponent } from './views/tabela/tabela.component';
import { FormulariosComponent } from './views/formularios/formularios.component';
import { ResponsiveTableComponent } from './template/responsive-table/responsive-table.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TestCaseManagerComponent } from './views/test-case-manager/test-case-manager.component';
import { TestCaseFormComponent } from './views/test-case-form/test-case-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    TabelaComponent,
    FormulariosComponent,
    ResponsiveTableComponent,
    TestCaseManagerComponent,
    TestCaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbCheckboxModule,
    NbRadioModule,
    NbTooltipModule,
    NbAccordionModule,
    MatPaginatorModule,
    NbListModule,
    NbSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TableComponent } from './table/table.component';
import { ContactoTableComponent } from './contacto-table/contacto-table.component';
import {FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'contacto', component: ContactoTableComponent },
  { path: '', component: BodyComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactoComponent,
    TableComponent,
    ContactoTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

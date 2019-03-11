import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TableComponent } from './table/table.component';
import { ContactoTableComponent } from './contacto-table/contacto-table.component';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'table', component: TableComponent },
  { path: 'contacto-table', component: ContactoTableComponent },
  { path: '', component: BodyComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]; 

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    //userHash:true pone un hanstag delante de la url
    imports:[RouterModule.forRoot( routes, { useHash: true } )],
	  exports: [RouterModule] 
})
export class AppRoutingModule { }

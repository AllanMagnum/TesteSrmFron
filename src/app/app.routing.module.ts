import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
    {path: 'clientes', component: ClienteListComponent},
    {path: 'clientes/create', component: ClienteFormComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
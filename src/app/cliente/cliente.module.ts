import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JasperoConfirmationsModule } from '@jaspero/ng-confirmations';

import { ClienteListComponent } from "./cliente-list/cliente-list.component";
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReceberClienteCriadoComponent } from './receber-cliente-criado/receber-cliente-criado.component';



@NgModule({
    declarations:[ClienteListComponent, ClienteFormComponent, ReceberClienteCriadoComponent],
    exports:[ClienteListComponent, ClienteFormComponent],
    imports:[
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),        
        ReactiveFormsModule,
        JasperoConfirmationsModule.forRoot(),
        BrowserAnimationsModule
    ]
})
export class ClienteModule{}
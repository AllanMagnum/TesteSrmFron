import { Component, OnInit } from '@angular/core';


import { ClienteService } from '../cliente.service';

import { ConfirmationService, ConfirmSettings } from "@jaspero/ng-confirmations";

import { FormGroup, FormBuilder } from '@angular/forms';
import { ResolveEmit } from 'src/app/resolve-emit';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  providers: [ClienteService]
})
export class ClienteListComponent implements OnInit {
  clientes: Object[] = [];
  
  form: FormGroup;

  constructor(
    private clienteService : ClienteService ,
    private _confirmation: ConfirmationService,
    private router: Router 
  ) {}


  ngOnInit() {
    this.clienteService
      .list()
        .subscribe(paginacao=>{             
          this.clientes = paginacao.content;          
        });
  } 

  settings: ConfirmSettings | any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    declineText: 'No',
    confirmText: 'Yes'    
  };

  open(idCliente:number) {
    
		this._confirmation.create('Warning', 'Excluir este registro?', this.settings)
        .subscribe((ans: ResolveEmit) => {
          if (ans.resolved == true) {
            console.log('deletou');
            this.clienteService.delete(idCliente).subscribe();
            this.router.navigate(['/clientes'])
          } else {
            console.log('decline button clicked');
          }
        });
	}
}

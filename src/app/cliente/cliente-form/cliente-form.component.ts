import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/cliente/cliente';
import { ClienteService } from '../cliente.service';
import { RiscoDto } from '../riscoDto';
import { RiscoService } from '../risco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  
  tipos: RiscoDto[] = [];

  cliente:Cliente = new Cliente();
  risco:RiscoDto = new RiscoDto();

  constructor(
    private clienteService:ClienteService,
    private riscoService:RiscoService,
    private router: Router
  ){}

  ngOnInit(){
    this.riscoService
      .list()
      .subscribe(tipos=>{             
        this.tipos = tipos;          
      });
      this.risco.descricao = "A";
      this.cliente.riscoDto = this.risco;
  } 

  onSubmit() { 
    this.clienteService.save(this.cliente)
    .subscribe(cliente => {
      console.log(cliente);
      this.router.navigate(['/clientes'])
    });
  }

  cancel(){
    this.router.navigate(['/clientes'])
  }
}

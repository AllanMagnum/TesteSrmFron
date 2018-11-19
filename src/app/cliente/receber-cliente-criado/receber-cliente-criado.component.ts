import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-receber-cliente-criado',
  templateUrl: './receber-cliente-criado.component.html',
  styleUrls: ['./receber-cliente-criado.component.css']
})
export class ReceberClienteCriadoComponent implements OnInit {

  cliente:Cliente;

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteService.emitirClienteCriado.subscribe(
      clienteCriado => this.cliente = clienteCriado
    );
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {

  constructor() { }

  itensPessoa:any[]= [
    {value: 'F', viewValue: 'Física'},
    {value: 'J', viewValue: 'Jurídica'}
  ]

  ngOnInit(): void {

  }

}

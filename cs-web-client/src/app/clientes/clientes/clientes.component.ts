import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import { Clientes } from './../../shared/model/clientes';
import { ClientesService } from './../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  colunas: string[] = ['id', 'nome', 'cpfcnpj', 'status'];
  dataSource: Clientes[] = [];

  form!: FormGroup;
  control!: FormControl;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  @ViewChild('compIncluir') incluir:any;


  constructor(private formBuilder: FormBuilder,
              private clientesServices: ClientesService,
              private router: Router) {

    this.inicializarForm();
    this.clientesServices.listarClientes().subscribe(clientes =>{
      this.dataSource = clientes;
    });

  }

  ngOnInit() {
    this.incluir.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.incluir.nativeElement.focus();
  }

  private inicializarForm() {
    this.form = this.formBuilder.group({
      nome: [null],
      cpfcnpj: [null],
      veiculo: [null],
      placa: [null],

    });

  }

  pesquisar(){
    console.log(this.dataSource);
  }
  exibirCadastro: boolean =  false;

  public novoCliente(){
    console.log('entrou');
    console.log(this.exibirCadastro);
    this.exibirCadastro = !this.exibirCadastro;
    return this.exibirCadastro;
  }

  exibirDetalheCliente(cliente:Clientes){
    console.log(cliente);
  }

}




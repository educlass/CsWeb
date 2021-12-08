import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Clientes } from './../../shared/model/clientes';
import { ClientesService } from './../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  colunas: string[] = ['id', 'nome', 'cpfcnpj', 'status'];

  //clientes: Clientes[] = [];
  dataSource: Clientes[] = [];

  form!: FormGroup;
  control!: FormControl;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
              private clientesServices: ClientesService) {

    this.inicializarForm();
    this.clientesServices.listarClientes().subscribe(clientes =>{
      //this.clientes = clientes;
      this.dataSource = clientes;
      console.log(this.dataSource);
    });

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

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

}




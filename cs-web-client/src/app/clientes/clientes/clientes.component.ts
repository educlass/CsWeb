import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  clienteSelecionado!:Clientes;

  exibirCadastro: boolean =  false;
  editar: boolean =  false;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
              private clientesServices: ClientesService,
              private router: Router,
              private chRef: ChangeDetectorRef) {

    this.inicializarFormFiltro();
    this.clientesServices.listarClientes().subscribe(clientes =>{
      this.dataSource = clientes;
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private inicializarFormFiltro() {
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


  public novoCliente(){
    console.log('entrou');
    console.log(this.exibirCadastro);
    this.exibirCadastro = !this.exibirCadastro;
    return this.exibirCadastro;
  }

  fechar(acao:boolean){
    this.exibirCadastro = acao;
    this.editar = acao;
  }


  editarCliente(cliente:Clientes){
    this.clienteSelecionado = cliente;
    this.editar = !this.editar;

    this.chRef.detectChanges();
    console.log( this.clienteSelecionado);
  }

}




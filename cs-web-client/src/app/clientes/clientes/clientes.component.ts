import { ClientesService } from './../services/clientes.service';
import { Clientes } from './../../shared/model/clientes';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //colunas: string[] = ['position', 'name', 'weight', 'symbol'];

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

   ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];

  data = [
    {"id": "1", "nome": "Mih", "cpfcnpj":"32904233873", "status": "Ativo"},
    {"id": "2", "nome": "Edu", "cpfcnpj":"32904233800", "status": "Inativo"},
    {"id": "3", "nome": "Bella", "cpfcnpj":"32904233873", "status": "Ativo"},
    {"id": "4", "nome": "Banhuela", "cpfcnpj":"32904233800", "status": "Inativo"},
    {"id": "5", "nome": "Nathan", "cpfcnpj":"32904233873", "status": "Ativo"},
    {"id": "6", "nome": "Lala", "cpfcnpj":"32904233800", "status": "Inativo"}
  ];

}




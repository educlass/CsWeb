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

  displayedColumns: string[] = ['id', 'nome', 'cpfcnpj', 'status', 'acao'];

  clientes: Clientes[] = [];
  dataSource: MatTableDataSource<Clientes>;

  form!: FormGroup;
  control!: FormControl;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
    private clientesServices: ClientesService) {
      this.dataSource = new MatTableDataSource(this.clientes);
  }

  ngOnInit() {
    this.inicializarForm();
    this.clientesServices.listarClientes().subscribe(clientes =>{
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
      this.dataSource.paginator = this.paginator;
    });
    console.log(this.clientes);
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  private inicializarForm() {
    this.form = this.formBuilder.group({
      nome: [null],
      cpfcnpj: [null],
      veiculo: [null],
      placa: [null],

    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




import { Clientes } from './../../shared/model/clientes';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpfcnpj', 'status'];

  clientes: Clientes[] = [];
  dataSource: MatTableDataSource<Clientes>;

  form!: FormGroup;
  control!: FormControl;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private formBuilder: FormBuilder) {
    // Create 100 users
    console.log(this.clientes);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  ngOnInit() {
    this.inicializarForm();
  }

  private inicializarForm() {
    this.form = this.formBuilder.group({
      nome: [null],
      cpfcnpj: [null],
      veiculo: [null],
      placa: [null],

    });
    /*this.form = new FormGroup({
      nome: new FormControl(null)
    });*/
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




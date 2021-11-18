import { ColunaTabela } from './model/ColunaTabela';
import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  @Input() listaColuna:string[] = [];
  @Input() controlName: string = '';
  @Input() linhas: any[]=[];
  @Input() addBotaoEditar: boolean = false;
  @Input() addBotaoExcluir: boolean = false;
  @Input() addPaginacao: boolean = false;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  columns : any;
  displayedColumns : any;
  dataSource: MatTableDataSource<any>;

  constructor() {
      this.dataSource = new MatTableDataSource(this.linhas);
      this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    //this.dataSource = new MatTableDataSource(this.linhas);
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.columns = this.getColumns();
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.linhas);
    this.dataSource.paginator = this.paginator;
  }

  private getColumns(){
    let colunasNovas: any[] = [];

    this.listaColuna.forEach(col =>{
       let t = new ColunaTabela(col, col );
       colunasNovas.push(t);
    })

    if(this.addBotaoEditar||this.addBotaoExcluir){
      let t = new ColunaTabela("acao","");
      colunasNovas.push(t);
    }

    return colunasNovas;
  }

  public renderizaCelula(elemento: any, key: any){
    return (elemento && key)? elemento[key]:'';
  }

}

/*export class ExampleDataSource extends DataSource<any> {

  connect(): Observable<Element[]> {
    //console.log(of(ELEMENT_DATA));
    return of();
  }

  disconnect() {}
}*/

import { ColunaTabela } from './model/ColunaTabela';
import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';

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

  columns : any;
  displayedColumns : any;
  dataSource: any;

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    this.dataSource = this.linhas;
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

export class ExampleDataSource extends DataSource<any> {

  connect(): Observable<Element[]> {
    //console.log(of(ELEMENT_DATA));
    return of();
  }

  disconnect() {}
}

import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

export class ItemStatus {
  name: string;
  checked: boolean;
  id: number;

  constructor(id:number, name: string) {
    this.id = id;
    this.name = name;
    this.checked = false;
  }
}

@Component({
  selector: 'checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.scss']
})
export class CheckboxTableComponent implements OnInit {

  @ViewChildren('checkBox') checkBox?: QueryList<any>;

  checked:any = [];
  items: ItemStatus[] = [];
  displayedColumns = ['name', 'select'];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      new ItemStatus(1, 'one'),
      new ItemStatus(2, 'two'),
      new ItemStatus(3, 'three'),
      new ItemStatus(4, 'four')
    ];
  }

  getCheckbox() {
    this.checked = this.items.filter(i => i.checked == true);
  }

  changeChkState(id:number) {
    this.items.forEach(chk => {
      if (chk.id === id) {
        chk.checked = !chk.checked;
        this.getCheckbox();
      }
    });
  }

  checkAll() {
    const numChecked = this.checked.length;
    const numItens = this.items.length;

    this.items.forEach(chk => {
      if ((numChecked === numItens)) {
        chk.checked = false;
      }else {
        chk.checked = true;
      }
      this.getCheckbox();
    });
  }

}

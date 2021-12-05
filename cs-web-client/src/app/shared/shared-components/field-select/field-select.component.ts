import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss']
})
export class FieldSelectComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;

  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() itens: any[] = [];
  @Input() style: string = '';

  constructor() { }

  ngOnInit(): void {

  }



}

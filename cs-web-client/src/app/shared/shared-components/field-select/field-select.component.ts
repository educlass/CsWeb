import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

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
  @Input() obrigatorio: boolean = false;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.control = this.form.get(this.controlName) as FormControl;
  }

}

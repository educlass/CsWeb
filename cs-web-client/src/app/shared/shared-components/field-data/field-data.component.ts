import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'field-data',
  templateUrl: './field-data.component.html',
  styleUrls: ['./field-data.component.scss']
})
export class FieldDataComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;

  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() obrigatorio: boolean = false;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.control = this.form.get(this.controlName) as FormControl;
  }

}

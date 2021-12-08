import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.scss']
})
export class FieldTextareaComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;

  @Input() controlName: string = '';
  @Input() label: string = '';

  constructor(
    private controlContainer: ControlContainer
    ) {

    }

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
    this.control = this.form.get(this.controlName) as FormControl;
  }

}

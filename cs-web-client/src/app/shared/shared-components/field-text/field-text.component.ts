import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss']
})
export class FieldTextComponent implements OnInit {

  form!: FormGroup;
  control!: FormControl;

  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() mask: string = '';
  @Input() matcher: any;

  constructor(
    private controlContainer: ControlContainer
    ) {

    }

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
    this.control = this.form.get(this.controlName) as FormControl;
  }

}

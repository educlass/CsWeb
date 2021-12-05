import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';
import { BasicTableComponent } from './shared-components/basic-table/basic-table.component';
import { FieldSelectComponent } from './shared-components/field-select/field-select.component';
import { FieldTextComponent } from './shared-components/field-text/field-text.component';
import { CheckboxTableComponent } from './shared-components/checkbox-table/checkbox-table.component';



@NgModule({
  declarations: [
    FieldTextComponent,
    BasicTableComponent,
    FieldSelectComponent,
    CheckboxTableComponent
  ],
  exports:[
    FieldTextComponent,
    FieldSelectComponent,
    BasicTableComponent,
    CheckboxTableComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

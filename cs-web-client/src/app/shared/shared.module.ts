import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';
import { BasicTableComponent } from './shared-components/basic-table/basic-table.component';
import { FieldSelectComponent } from './shared-components/field-select/field-select.component';
import { FieldTextComponent } from './shared-components/field-text/field-text.component';



@NgModule({
  declarations: [
    FieldTextComponent,
    BasicTableComponent,
    FieldSelectComponent
  ],
  exports:[
    FieldTextComponent,
    FieldSelectComponent,
    BasicTableComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

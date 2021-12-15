import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';
import { BasicTableComponent } from './shared-components/basic-table/basic-table.component';
import { CheckboxTableComponent } from './shared-components/checkbox-table/checkbox-table.component';
import { FieldDataComponent } from './shared-components/field-data/field-data.component';
import { FieldSelectComponent } from './shared-components/field-select/field-select.component';
import { FieldTextComponent } from './shared-components/field-text/field-text.component';
import { FieldTextareaComponent } from './shared-components/field-textarea/field-textarea.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AutofocusDirective } from './directive/autofocus.directive';
import { BarraDivisaoComponent } from './shared-components/barra-divisao/barra-divisao.component'



@NgModule({
  declarations: [
    FieldTextComponent,
    BasicTableComponent,
    FieldSelectComponent,
    CheckboxTableComponent,
    FieldDataComponent,
    FieldTextareaComponent,
    AutofocusDirective,
    BarraDivisaoComponent
  ],
  exports:[
    FieldTextComponent,
    FieldSelectComponent,
    BasicTableComponent,
    CheckboxTableComponent,
    FieldDataComponent,
    FieldTextareaComponent,
    BarraDivisaoComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class SharedModule { }

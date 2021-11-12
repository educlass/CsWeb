import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTextComponent } from './shared-components/field-text/field-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicTableComponent } from './shared-components/basic-table/basic-table.component';



@NgModule({
  declarations: [
    FieldTextComponent,
    BasicTableComponent
  ],
  exports:[
    FieldTextComponent,
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

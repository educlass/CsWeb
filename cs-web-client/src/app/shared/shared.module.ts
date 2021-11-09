import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTextComponent } from './shared-components/field-text/field-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FieldTextComponent
  ],
  exports:[
    FieldTextComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

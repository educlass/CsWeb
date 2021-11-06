import { SharedModule } from './../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class ClientesModule { }

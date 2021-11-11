import { ClientesService } from './services/clientes.service';
import { SharedModule } from './../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[ClientesService]
})
export class ClientesModule { }

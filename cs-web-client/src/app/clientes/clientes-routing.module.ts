import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'cadastrar', component: CadastrarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

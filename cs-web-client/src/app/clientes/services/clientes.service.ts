import { Clientes } from './../../shared/model/clientes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = '/assets/mock/clientes.json';

  constructor(private httpClient: HttpClient) { }

  listarClientes(){
    return this.httpClient.get<Clientes[]>(this.API);
  }
}

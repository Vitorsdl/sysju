import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Cliente[]>(this.API);
  }

  loadByID(id) {
    return this.http.get<Cliente>(`${this.API}/${id}`).pipe(take(1));
  }

  create(cliente) {
    return this.http.post(this.API, cliente).pipe(take(1));
  }

  update(cliente) {
    return this.http.put(`${this.API}/${cliente.id}`, cliente).pipe(take(1));
  }

  save(cliente) {
    if (cliente.id) {
      return this.update(cliente);
    }
    return this.create(cliente);
  }
  
  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
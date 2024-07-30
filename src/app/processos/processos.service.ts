import { Processo } from './processo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  private readonly API = 'http://localhost:8080/processos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Processo[]>(this.API);
  }

  loadByID(id) {
    return this.http.get<Processo>(`${this.API}/${id}`).pipe(take(1));
  }

  create(processo) {
    return this.http.post(this.API, processo).pipe(take(1));
  }

  update(processo) {
    return this.http.put(`${this.API}/${processo.id}`, processo).pipe(take(1));
  }

  save(processo) {
    if (processo.id) {
      return this.update(processo);
    }
    return this.create(processo);
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
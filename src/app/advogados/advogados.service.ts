import { Advogado } from './advogado';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvogadosService {
  private readonly API = 'http://localhost:8080/advogados';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Advogado[]>(this.API);
  }

  loadByID(id) {
    return this.http.get<Advogado>(`${this.API}/${id}`).pipe(take(1));
  }

  create(advogado) {
    return this.http.post(this.API, advogado).pipe(take(1));
  }

  update(advogado) {
    return this.http.put(`${this.API}/${advogado.id}`, advogado).pipe(take(1));
  }

  save(advogado) {
    if (advogado.id) {
      return this.update(advogado);
    }
    return this.create(advogado);
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}

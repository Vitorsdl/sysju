import { Evento } from './evento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly API = 'http://localhost:8080/eventos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Evento[]>(this.API);
  }

  loadByID(id) {
    return this.http.get<Evento>(`${this.API}/${id}`).pipe(take(1));
  }

  create(evento) {
    return this.http.post(this.API, evento).pipe(take(1));
  }

  update(evento) {
    return this.http.put(`${this.API}/${evento.id}`, evento).pipe(take(1));
  }

  save(evento) {
    if (evento.id) {
      return this.update(evento);
    }
    return this.create(evento);
  }
  
  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
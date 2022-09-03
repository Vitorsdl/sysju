import { Comarca } from './comarca';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComarcasService {

  private readonly API = 'http://localhost:8080/comarcas';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Comarca[]>(this.API);
  }

  loadByID(id) {
    return this.http.get<Comarca>(`${this.API}/${id}`).pipe(take(1));
  }
}
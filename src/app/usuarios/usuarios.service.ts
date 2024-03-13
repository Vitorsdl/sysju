import { take } from 'rxjs/operators';
import { Usuario } from './../login/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Usuario[]>(this.API);
  }

  loadByLogin(login) {
    return this.http.get<Usuario>(`${this.API}/${login}`).pipe(take(1));
  }

  create(usuario) {
    return this.http.post(this.API, usuario).pipe(take(1));
  }

  update(usuario) {
    return this.http.put(`${this.API}/${usuario.login}`, usuario).pipe(take(1));
  }

  save(usuario) {
    return this.create(usuario);
  }  

  remove(login){
    return this.http.delete(`${this.API}/${login}`).pipe(take(1));
  }
}

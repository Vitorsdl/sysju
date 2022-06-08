import { LoginComponent } from './login.component';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'http://localhost:8080/usuarios';

  usuarioAutenticado: Boolean = false;
  nlogin = new EventEmitter<string>();
  nroles = new EventEmitter<string>();

  mostraMenu = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  buscaUsuario(usuario) {
    return this.http.get<Usuario[]>(`${this.API}/${usuario.login}`).pipe(take(1));
  }

  dados(login: string) { //, roles: string
    this.nlogin.emit(login);
    //this.nroles.emit(roles);

  }

  usuarioEstaAutent(){
    return this.usuarioAutenticado;
  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post<any>(this.API, usuario).pipe(take(1));
  }
}

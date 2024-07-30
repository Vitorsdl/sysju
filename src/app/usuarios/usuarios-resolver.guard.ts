import { UsuariosService } from './usuarios.service';
import { Usuario } from './../login/usuario';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosResolverGuard implements Resolve<Usuario> {
  
  constructor(private service: UsuariosService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> {
    if (route.params && route.params['login']) {
      return this.service.loadByLogin(route.params['login']);
    }

    return of({
      id: null,
      login: null,
      senha: null,
      roles: null
    });
  }

}

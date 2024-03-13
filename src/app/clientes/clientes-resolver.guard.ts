import { ClientesService } from './clientes.service';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesResolverGuard implements Resolve<Cliente> {

  constructor(private service: ClientesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      rg: null,
      cpf: null,
      sexo: null,
      telefone: null,
      email: null,
      endereco: null,
      tipoPessoa: null
    });
  }

}

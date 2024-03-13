import { AdvogadosService } from './advogados.service';
import { Advogado } from './advogado';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvogadosResolverGuard implements Resolve<Advogado> {
  
  constructor(private service: AdvogadosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Advogado> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null
    });
  }

}

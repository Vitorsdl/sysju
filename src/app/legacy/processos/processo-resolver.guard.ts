import { ProcessosService } from './processos.service';
import { Processo } from './processo';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoResolverGuard implements Resolve<Processo> {

  constructor(private service: ProcessosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Processo> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      numero: null,
      tipo: null,
      procedimento: null,
      comarca: null,
      vara: null,
      resultadoRecurso: null,
      cliente: null,
      advogado: null
    });
  }

}

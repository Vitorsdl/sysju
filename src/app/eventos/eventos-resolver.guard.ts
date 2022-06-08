import { EventosService } from './eventos.service';
import { Evento } from './evento';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosResolverGuard implements Resolve<Evento> {

  constructor(private service: EventosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evento> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      dataHora: null,
      tipo: null,
      descricao: null,
      statis: null
    });
  }

}

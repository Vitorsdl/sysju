import { environment } from './../../../environments/environment';
import { AuthService } from './../../login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from './../../shared/alert-modal.service';
import { EventosService } from './../eventos.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { empty } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  preserveWhitespaces: true
})
export class EventosComponent implements OnInit {

  bsModalRef: BsModalRef;
  eventos: Evento[];  
  visiBt: boolean = false; 

  constructor(private auto: AuthService, private service: EventosService, private alertService: AlertModalService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();

    if (environment.roles === true) {
      this.visiBt = true;
    }
  }
  
  list() {
    this.service.list().pipe(catchError(erro => {this.handleError(); return empty();})).subscribe(dados => {this.eventos = dados, console.log(dados)});
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao buscar eventos.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }
  
  onDelete(id){
    this.service.remove(id).subscribe(success => {this.list();}, error => {this.alertService.showAlertDanger("Erro ao excluir");});
  }

}

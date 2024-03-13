import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { AdvogadosService } from './../advogados.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Advogado } from './../advogado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advogados',
  templateUrl: './advogados.component.html',
  styleUrls: ['./advogados.component.css'],
  preserveWhitespaces: true
})
export class AdvogadosComponent implements OnInit {

  bsModalRef: BsModalRef;
  advogados: Advogado[];

  constructor(private service: AdvogadosService, private alertService: AlertModalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().pipe(catchError(erro => { this.handleError(); return empty(); })).subscribe(dados => { this.advogados = dados, console.log(dados) });
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao buscar advogados.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(id){
    this.service.remove(id).subscribe(success => {this.list();}, error => {this.alertService.showAlertDanger("Erro ao excluir");});
  }

}

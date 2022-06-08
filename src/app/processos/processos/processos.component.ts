import { environment } from './../../../environments/environment';
import { AuthService } from './../../login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ProcessosService } from './../processos.service';
import { Processo } from './../processo';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  //public paginaAtual = 1; //quando o componente carregar iniciara da pagina 1.

  bsModalRef: BsModalRef;
  processos: Processo[];
  visiBt: boolean = false;
  _id: '';
  _numero: '';
  _tipo: '';
  _procedimento: '';
  _comarca: '';
  _vara: '';
  _resultadoRecurso: '';
  _cliente: '';
  _advogado: '';

  constructor(private auto: AuthService, private service: ProcessosService, private alertService: AlertModalService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();

    if (environment.roles === true) {
      this.visiBt = true;
    }
  }
  
  list() {
    this.service.list().pipe(catchError(erro => {this.handleError(); return empty();})).subscribe(dados => {this.processos = dados, console.log(dados)})
  }

  buscaDados(id, numero, tipo, procedimento, comarca, vara, resultadoRecurso, cliente, advogado){
    this._id = id;
    this._numero = numero;
    this._tipo = tipo;
    this._procedimento = procedimento;
    this._comarca = comarca;
    this._vara = vara;
    this._resultadoRecurso = resultadoRecurso;
    this._cliente = cliente;
    this._advogado = advogado;
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao buscar processos.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(id){
    this.service.remove(id).subscribe(success => {this.list();}, error => {this.alertService.showAlertDanger("Erro ao excluir");});
  }  
}
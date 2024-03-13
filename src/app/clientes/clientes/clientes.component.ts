import { environment } from './../../../environments/environment';
import { AuthService } from './../../login/auth.service';
import { catchError } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ClientesService } from './../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  bsModalRef: BsModalRef;
  clientes: Cliente[];
  visiBt: boolean = false;
  _id:'';
  _nome: '';
  _rg: '';
  _cpf: '';
  _sexo: '';
  _telefone: '';
  _email: '';
  _endereco: '';
  _tipoPessoa:'';

  constructor(private auto: AuthService ,private service: ClientesService, private alertService: AlertModalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();

    if (environment.roles === true) {
      this.visiBt = true;
    }
  }
  
  list() {
    this.service.list().pipe(catchError(erro => {this.handleError(); return empty();})).subscribe(dados => {this.clientes = dados, console.log(dados)});
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao buscar clientes.');
  }

  buscaDados(id, nome, rg, cpf, sexo, telefone, email, endereco, tipoPessoa){
    this._id = id;
    this._nome = nome;
    this._rg = rg;
    this._cpf = cpf;
    this._sexo = sexo;
    this._telefone = telefone;
    this._email = email;
    this._endereco = endereco;
    this._tipoPessoa = tipoPessoa;
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(id){
    this.service.remove(id).subscribe(success => {this.list();}, error => {this.alertService.showAlertDanger("Erro ao excluir");});
  }
}
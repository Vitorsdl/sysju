import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Usuario } from './../../login/usuario';
import { UsuariosService } from './../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  preserveWhitespaces: true
})
export class UsuariosComponent implements OnInit {

  bsModalRef: BsModalRef;
  usuarios: Usuario[];

  constructor(private service: UsuariosService, private alertService: AlertModalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.service.list().pipe(catchError(erro => { this.handleError(); return empty(); })).subscribe(dados => { this.usuarios = dados, console.log(dados) });
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao buscar usuarios.');
  } 

  onDelete(login){
    this.service.remove(login).subscribe(success => {this.list();}, error => {this.alertService.showAlertDanger("Erro ao excluir");});
  }
}

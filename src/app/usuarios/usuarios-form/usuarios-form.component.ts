import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { UsuariosService } from './../usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  formuser: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: UsuariosService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const usuario = this.route.snapshot.data['usuario'];

    this.formuser = this.fb.group({
      login: [usuario.login,[Validators.required]],
      senha: [usuario.senha,[Validators.required]],
      roles: [usuario.roles,[Validators.required]],
  });
  }

  hasError(field:string) {
    return this.formuser.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formuser.valid) {

      let msgSuccess = 'Usuario salvo.';
      let msgError = 'Erro ao salvar.';
      if (this.formuser.value.id) {
        msgSuccess = 'Usuario atualizado.';
        msgError = 'Erro ao atualizar.';
      }

      this.service.save(this.formuser.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess); this.location.back() },
        error => { this.modal.showAlertDanger(msgError)}
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formuser.reset();
    this.location.back();
  }

}

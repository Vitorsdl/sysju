import { AlertModalService } from './../../shared/alert-modal.service';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  formcli: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ClientesService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const cliente = this.route.snapshot.data['cliente'];

    this.formcli = this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required]],
      rg: [cliente.rg, [Validators.required]],
      cpf: [cliente.cpf, [Validators.required]],
      sexo: [cliente.sexo, [Validators.required]],
      email: [cliente.email, [Validators.required, Validators.email]],
      telefone: [cliente.telefone, [Validators.required]],
      endereco: [cliente.endereco, [Validators.required]],
      tipoPessoa: [cliente.tipoPessoa, [Validators.required]]
    });
  }

  hasError(field: string) {
    return this.formcli.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formcli.valid) {

      let msgSuccess = 'Cliente salvo.';
      let msgError = 'Erro ao salvar.';
      if (this.formcli.value.id) {
        msgSuccess = 'Cliente atualizado.';
        msgError = 'Erro ao atualizar.';
      }

      this.service.save(this.formcli.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess); this.location.back() },
        error => { this.modal.showAlertDanger(msgError); }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formcli.reset();
    this.location.back();
  }

}

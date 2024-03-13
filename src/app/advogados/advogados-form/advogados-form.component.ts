import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { AdvogadosService } from './../advogados.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-advogados-form',
  templateUrl: './advogados-form.component.html',
  styleUrls: ['./advogados-form.component.css']
})
export class AdvogadosFormComponent implements OnInit {

  formadv: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: AdvogadosService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const advogado = this.route.snapshot.data['advogado'];

    this.formadv = this.fb.group({
      id: [advogado.id],
      nome: [advogado.nome, [Validators.required]]
    });
  }

  hasError(field: string) {
    return this.formadv.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formadv.valid) {

      let msgSuccess = 'Advogado salvo.';
      let msgError = 'Erro ao salvar.';
      if (this.formadv.value.id) {
        msgSuccess = 'Advogado atualizado.';
        msgError = 'Erro ao atualizar.';
      }

      this.service.save(this.formadv.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess); this.location.back() },
        error => { this.modal.showAlertDanger(msgError); }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formadv.reset();
    this.location.back();
  }
}

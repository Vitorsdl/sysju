import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  formevent: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: EventosService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const evento = this.route.snapshot.data['evento'];

    this.formevent = this.fb.group({
      id: [evento.id],
      tipo: [evento.tipo,[Validators.required]],
      dataHora: [evento.dataHora,[Validators.required]],
      descricao: [evento.descricao,[Validators.required]],
      status: [evento.status,[Validators.required]]
    });
  }

  hasError(field:string) {
    return this.formevent.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formevent.valid) {

      let msgSuccess = 'Evento salvo.';
      let msgError = 'Erro ao salvar.';
      if (this.formevent.value.id) {
        msgSuccess = 'Evento atualizado.';
        msgError = 'Erro ao atualizar.';
      }

      this.service.save(this.formevent.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess); this.location.back() },
        error => { this.modal.showAlertDanger(msgError); }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formevent.reset();
    this.location.back();
  }

}

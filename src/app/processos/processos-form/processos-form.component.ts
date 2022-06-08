import { ComarcasService } from './../../Comarca/comarca.service';
import { Comarca } from './../../Comarca/comarca';
import { AdvogadosService } from './../../advogados/advogados.service';
import { Advogado } from './../../advogados/advogado';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from './../../clientes/clientes.service';
import { Cliente } from './../../clientes/cliente';
import { AlertModalService } from './../../shared/alert-modal.service';
import { ProcessosService } from './../processos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {

  formproc: FormGroup;
  submitted = false;
  clientes: Cliente[];
  advogados: Advogado[];
  comarcas: Comarca[];

  constructor(private fb: FormBuilder, private service: ProcessosService, private servicecl: ClientesService, private servicead: AdvogadosService, private serviceco: ComarcasService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const processo = this.route.snapshot.data['processo'];
    if(processo.cliente_id != null){

    }
    
    this.list();

    this.formproc = this.fb.group({
      id: [processo.id],
      numero: [processo.numero, [Validators.required]],
      tipo: [processo.tipo, [Validators.required]],
      procedimento: [processo.procedimento, [Validators.required]],
      vara: [processo.vara, [Validators.required]],
      resultadoRecurso: [processo.resultadoRecurso, [Validators.required]],
      cliente: this.fb.group({
        id: [processo.cliente, [Validators.required]]
      }),
      advogado: this.fb.group({
        id: [processo.advogado, [Validators.required]]
      }),
      comarca: this.fb.group({
        id: [processo.comarca, [Validators.required]]
      })
    });
  }

  list() {
    this.servicecl.list().subscribe(dados => { this.clientes = dados, console.log(dados) });
    this.servicead.list().subscribe(dados => { this.advogados = dados});
    this.serviceco.list().subscribe(dados => {this.comarcas = dados});
  }

  hasError(field: string) {
    return this.formproc.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formproc.value);
    if (this.formproc.valid) {

      let msgSuccess = 'Processo salvo.';
      let msgError = 'Erro ao salvar.';
      if (this.formproc.value.id) {
        msgSuccess = 'Processo atualizado.';
        msgError = 'Erro ao atualizar.';
      }

      this.service.save(this.formproc.value).subscribe(
        success => { this.modal.showAlertSuccess(msgSuccess); this.location.back() },
        error => { this.modal.showAlertDanger(msgError); }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formproc.reset();
    this.location.back();
  }

}

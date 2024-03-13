import { ReactiveFormsModule } from '@angular/forms';
import { ProcessoRoutingModule } from './processos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessosComponent } from './processos/processos.component';
import { ProcessosFormComponent } from './processos-form/processos-form.component';



@NgModule({
  declarations: [ProcessosComponent, ProcessosFormComponent],
  imports: [
    CommonModule,
    ProcessoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProcessosModule { }

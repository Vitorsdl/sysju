import { AdvogadosRoutingModule } from './advogados.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvogadosComponent } from './advogados/advogados.component';
import { AdvogadosFormComponent } from './advogados-form/advogados-form.component';



@NgModule({
  declarations: [AdvogadosComponent, AdvogadosFormComponent],
  imports: [
    CommonModule,
    AdvogadosRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdvogadosModule { }

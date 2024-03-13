import { ReactiveFormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';



@NgModule({
  declarations: [ClientesComponent, ClientesFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }

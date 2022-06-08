import { ReactiveFormsModule } from '@angular/forms';
import { EventosRoutingModule } from './eventos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos/eventos.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';



@NgModule({
  declarations: [EventosComponent, EventosFormComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    ReactiveFormsModule
  ]
})
export class EventosModule { }

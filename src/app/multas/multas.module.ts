import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultasComponent } from './multas/multas.component';
import { MultasFormComponent } from './multas-form/multas-form.component';
import { MultasRoutingModule } from './multas.routing.module'



@NgModule({
  declarations: [
    MultasComponent,
    MultasFormComponent
  ],
  imports: [
    CommonModule,
    MultasRoutingModule
  ]
})
export class MultasModule { }

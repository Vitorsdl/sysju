import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistoriasComponent } from './vistorias/vistorias.component';
import { VistoriasFormComponent } from './vistorias-form/vistorias-form.component';
import { VistoriasRoutingModule } from './vistorias.routing.module'



@NgModule({
  declarations: [
    VistoriasComponent,
    VistoriasFormComponent
  ],
  imports: [
    CommonModule,
    VistoriasRoutingModule
  ]
})
export class VistoriasModule { }

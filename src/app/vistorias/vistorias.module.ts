import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistoriasComponent } from './vistorias/vistorias.component';
import { VistoriasFormComponent } from './vistorias-form/vistorias-form.component';



@NgModule({
  declarations: [
    VistoriasComponent,
    VistoriasFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VistoriasModule { }

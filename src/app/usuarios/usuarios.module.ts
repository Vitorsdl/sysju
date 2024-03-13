import { UsuariosRoutingModule } from './usuarios.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';



@NgModule({
  declarations: [UsuariosComponent, UsuariosFormComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }

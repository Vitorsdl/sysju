import { UsuariosResolverGuard } from './usuarios-resolver.guard';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const usuariosRoutes: Routes = [
    {
        path: '',
        component: UsuariosComponent
    },
    {
        path: 'novo',
        component: UsuariosFormComponent,
        resolve: { usuario: UsuariosResolverGuard}
    },
    {
        path: 'editar/:id',
        component: UsuariosFormComponent,
        resolve: { usuario: UsuariosResolverGuard}
    }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
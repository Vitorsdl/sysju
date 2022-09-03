import { ClientesResolverGuard } from './clientes-resolver.guard';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const clientesRoutes: Routes = [
    {
        path: '',
        component: ClientesComponent
    },
    {
        path: 'novo',
        component: ClientesFormComponent,
        resolve: { cliente: ClientesResolverGuard}
    },
    {
        path: 'editar/:id',
        component: ClientesFormComponent,
        resolve: { cliente: ClientesResolverGuard}
    }
];

@NgModule({
    imports: [RouterModule.forChild(clientesRoutes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {}
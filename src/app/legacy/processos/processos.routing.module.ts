import { ProcessoResolverGuard } from './processo-resolver.guard';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ProcessosComponent } from './processos/processos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';


const processosRoutes: Routes = [
    {
        path: '',
        component: ProcessosComponent
    },
    {
        path: 'novo',
        component: ProcessosFormComponent,
        resolve: { processo: ProcessoResolverGuard}
    },
    {
        path: 'editar/:id',
        component: ProcessosFormComponent,
        resolve: { processo: ProcessoResolverGuard}
    }
];

@NgModule({
    imports: [RouterModule.forChild(processosRoutes)],
    exports: [RouterModule]
})
export class ProcessoRoutingModule {}
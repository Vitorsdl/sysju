import { AdvogadosResolverGuard } from './advogados-resolver.guard';
import { AdvogadosFormComponent } from './advogados-form/advogados-form.component';
import { AdvogadosComponent } from './advogados/advogados.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const advogadosRoutes: Routes = [
    {
        path: '',
        component: AdvogadosComponent
    },
    {
        path: 'novo',
        component: AdvogadosFormComponent,
        resolve: { advogado: AdvogadosResolverGuard}
    },
    {
        path: 'editar/:id',
        component: AdvogadosFormComponent,
        resolve: { advogado: AdvogadosResolverGuard}
    }
];

@NgModule({
    imports: [RouterModule.forChild(advogadosRoutes)],
    exports: [RouterModule]
})
export class AdvogadosRoutingModule {}
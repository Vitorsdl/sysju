import { EventosResolverGuard } from './eventos-resolver.guard';
import { EventosComponent } from './eventos/eventos.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const eventosRoutes: Routes = [
    {
        path: '',
        component: EventosComponent
    },
    {
        path: 'novo',
        component: EventosFormComponent,
        resolve: { evento: EventosResolverGuard}
    },
    {
        path: 'editar/:id',
        component: EventosFormComponent,
        resolve: { evento: EventosResolverGuard}
    }

];

@NgModule({
    imports: [RouterModule.forChild(eventosRoutes)],
    exports: [RouterModule]
})
export class EventosRoutingModule {}
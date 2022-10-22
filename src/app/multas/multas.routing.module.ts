import { MultasComponent } from './multas/multas.component'
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const multasRoutes: Routes = [
    {
        path: '',
        component: MultasComponent    }

];

@NgModule({
    imports: [RouterModule.forChild(multasRoutes)],
    exports: [RouterModule]
})
export class MultasRoutingModule {}
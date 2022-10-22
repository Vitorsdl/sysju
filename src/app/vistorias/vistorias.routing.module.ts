import {VistoriasComponent} from './vistorias/vistorias.component'
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const vistoriasRoutes: Routes = [
    {
        path: '',
        component: VistoriasComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(vistoriasRoutes)],
    exports: [RouterModule]
})
export class VistoriasRoutingModule {}
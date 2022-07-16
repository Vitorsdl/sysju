import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/Home/home.component';


const routes: Routes = [
  
//{
//    path: 'processos', loadChildren: () => import('./processos/processos.module').then(m => m.ProcessosModule) //canActivate: [AuthGuard]
// },
//  {
//    path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) //canActivate: [AuthGuard]
//  },
//  {
//    path: 'eventos', loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule) //canActivate: [AuthGuard]
//  },
//  {
//    path: 'advogados', loadChildren: () => import('./advogados/advogados.module').then(m => m.AdvogadosModule) //canActivate: [AuthGuard]
//  },
//  {
//    path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) //canActivate: [AuthGuard]
//  },
 // {
    //path: 'vistorias', loadChildren: () => import('./vistorias/visotiras.module').then(m =>m.Vistorias)
 // },
 // {
    //path: 'multas', loadChildren: () => import('./multas/multas.module').then(m =>m.Multas)
 // },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path:'',
    component: HomeComponent //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

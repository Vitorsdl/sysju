import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/Home/home.component';


const routes: Routes = [
  
  {
    path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) //canActivate: [AuthGuard]
  },
  {
    path: 'vistorias', loadChildren: () => import('./vistorias/vistorias.module').then(m =>m.VistoriasModule)
  },
  {
    path: 'multas', loadChildren: () => import('./multas/multas.module').then(m =>m.MultasModule)
  },
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

import { Md5 } from 'ts-md5/dist/md5';
import { AlertModalService } from './../shared/alert-modal.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  loginForm: FormGroup;
  usuarios: Usuario[];

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private modal: AlertModalService, private alertService: AlertModalService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
    login: ["",[]],
    senha: ["",[]]
  })
  }

  fazerLogin() {
    const md5 = new Md5();
    let loginT = this.loginForm.get('login').value;
    let senhaT = this.loginForm.get('senha').value;
    this.router.navigate(['/']);

      /*parte para teste*/
      if(loginT == "vitoradm" && senhaT == "123456"){
         this.authService.usuarioAutenticado = true;
         this.authService.mostraMenu.emit(true);
         this.router.navigate(['/']);
         this.authService.dados(loginT);
      }else{
        this.modal.showAlertDanger("Login/ ou senha esta incorreto.");
      }
    /*this.authService.buscaUsuario(this.loginForm.value).subscribe((data: any) => {
      if(data.login === loginT && data.senha === md5.appendStr(senhaT).end()){
        this.authService.usuarioAutenticado = true;

        this.authService.mostraMenu.emit(true);

        this.router.navigate(['/']);

        this.authService.dados(data.login, data.roles);
      }else {
        this.modal.showAlertDanger("Login/ ou senha esta incorreto.");
      }
    });*/
  }  
}

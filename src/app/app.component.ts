import { environment } from './../environments/environment';
import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sysju';

  //mostraMenu: boolean = false;
  //visiadv: boolean = false;
  //visiuser: boolean = false;

  mostraMenu: boolean = false;
  visiadv: boolean = false;
  visiuser: boolean = false;

  login: string = '';
  roles: string = '';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.mostraMenu.subscribe(
      mostrar => this.mostraMenu = mostrar
      //mostrar => this.mostraMenu = mostrar
    );

    this.authService.nlogin.subscribe(
      dados => { this.login = dados }
    );

    this.authService.nroles.subscribe(
      dados => {
        this.roles = dados

        if (dados === "Administrador") {
          //this.visiadv = true;
          //this.visiuser = true;
          this.visiadv = true;
          this.visiuser = true;
          environment.roles = true;
        }
      }
    );
  }

  sair() {
    location.reload();
  }
}
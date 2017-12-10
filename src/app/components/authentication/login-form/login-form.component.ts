import { Component, OnInit } from '@angular/core';
import { LoginModel } from './../../../core/models/input-models/login-model'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public model : LoginModel;
  public loginFail : boolean;
  public username : string;

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {
    this.model = new LoginModel("", "");
    this.username = "";
  }

  ngOnInit() {
  }

  login () : void {
    this.authService.login(this.model)
      .subscribe(
        data => {
          this.successfulLogin(data);
        },
        err => {
          this.loginFail = true;
        }
      )
  }


  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.loginFail = false;
    this.router.navigate(['/home']);
  }

}
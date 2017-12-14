import { Component, OnInit } from '@angular/core';
import { LoginModel } from './../../../core/models/input-models/login-model'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


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
    private router : Router,
    public toastr: ToastsManager,
    private spinnerService: Ng4LoadingSpinnerService
    
  ) {
    this.model = new LoginModel("", "");
    this.username = "";
  }

  ngOnInit() {
  }

  login () : void {
    this.spinnerService.show();
    this.authService.login(this.model)
      .subscribe(
        data => {
          this.successfulLogin(data);
          this.spinnerService.hide();
        },
        err => {
          this.toastr.error('Failed Login!');
          this.spinnerService.hide();
        }
      )
  }


  successfulLogin(data) : void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.authService.role = data.role;
    this.loginFail = false;
    this.authService.tryNavigate();
    this.showSuccess()
    
  }
  showSuccess() {
    this.toastr.success('You have successfully logged in');
  }

}

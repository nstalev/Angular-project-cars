import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './../../../core/models/input-models/register-model'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  public model : RegisterModel;
  public registeredUser : string;
  public registerSuccess : boolean;
  public registerFail : boolean;

  constructor(
    private authService : AuthenticationService,
    private router : Router,
    public toastr: ToastsManager,
    private spinnerService: Ng4LoadingSpinnerService
  ) { 
    this.model = new RegisterModel("", "", "", "", "");
    this.model['role']= 'user'
  }

  register() : void {
    this.spinnerService.show();
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
          this.spinnerService.hide();
        },
        err => {
          this.toastr.error('Register error');
          this.spinnerService.hide();
        }
      )
  }


  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.registeredUser = data['username'];
    this.router.navigate(["./login"]);
    this.toastr.success('You have successfully registered');
  }

}

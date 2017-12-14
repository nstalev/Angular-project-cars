import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './../../../core/models/input-models/register-model'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


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
    public toastr: ToastsManager
  ) { 
    this.model = new RegisterModel("", "", "", "", "");
    this.model['role']= 'user'
  }

  register() : void {
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
        },
        err => {
          this.toastr.error('Register error');
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

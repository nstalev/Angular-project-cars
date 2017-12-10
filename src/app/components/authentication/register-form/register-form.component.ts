import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './../../../core/models/input-models/register-model'
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';

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
    private router : Router
  ) { 
    this.model = new RegisterModel("", "", "", "");
  }

  register() : void {
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.successfulRegister(data);
        //  this.router.navigate(['/login']);
        },
        err => {
          this.registerFail = true;
        }
      )
  }


  successfulRegister(data) : void {
    this.registerSuccess = true;
    this.registeredUser = data['username'];
  }

}

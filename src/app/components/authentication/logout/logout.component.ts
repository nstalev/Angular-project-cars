import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../core/services/authentication/auth.service'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService : AuthenticationService,
    private router : Router,
    public toastr: ToastsManager
  ) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.toastr.success('LogOut Successful!')
      })
  }
}
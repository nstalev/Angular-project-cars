import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../core/services/authentication/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean = false;
  isAdmin: boolean = false;
  
   constructor(private authService: AuthenticationService) { }
 
   ngOnInit() {
     this.authService.isLoggedIn();
   }
 
 
   toggleCollapse() {
     this.show = !this.show
   }

  
}

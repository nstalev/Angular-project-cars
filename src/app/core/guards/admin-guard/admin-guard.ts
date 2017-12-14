import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService} from './../../services/authentication/auth.service'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.checkIfIsAdmin(state.url);
  }


  checkIfIsAdmin(url : string) {
    if (this.authService.role ==="admin") {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(["/login"]);
    return false;
  }

}
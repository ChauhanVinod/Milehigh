import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  user:any;
  constructor(private router: Router ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let isLoggedIn = false; // ... your login logic here
    this.user = localStorage.getItem('currentUser');
    if(this.user==='' || this.user===null || this.user===undefined){
        isLoggedIn=false;
    }else{
        isLoggedIn=true;
    }

   
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

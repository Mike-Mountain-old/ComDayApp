import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {UserService} from './Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userAuthenticated: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate() {
    this.userService.authenticated.subscribe(value => {
      this.userAuthenticated = value;
    });

    if (this.userAuthenticated) {
      console.log('user is logged in');
      return true;
    } else {
      console.log('no user logged in, redirecting...');
      this.router.navigateByUrl('');
    }
  }
}

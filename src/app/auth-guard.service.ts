import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {UserService} from './users/user.service';

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
      return true;
    } else {
      this.router.navigateByUrl('');
    }
  }
}

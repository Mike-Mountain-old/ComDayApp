import {Component, OnInit} from '@angular/core';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  authenticated: boolean;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.authenticated.subscribe(value => {
      this.authenticated = value;
    });
  }

}

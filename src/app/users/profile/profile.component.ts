import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  users: any;

  ngOnInit() {
    this.userService.viewUserProfile();
    // this.users = this.userService.query;
  }

}

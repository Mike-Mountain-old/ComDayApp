import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {ModalService} from '../../Services/modal.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  loading = false;
  openDropDown = false;
  showModal = false;
  login = false;
  register = false;
  authenticated: boolean;
  userId: any;

  constructor(private userService: UserService,
              public modalService: ModalService,
              public fireAuth: AngularFireAuth,
              public router: Router) {
  }

  ngOnInit() {
    this.userService.loading.subscribe(loading => {
      this.loading = loading;
    });

    this.userService.authenticated.subscribe(value => {
      this.authenticated = value;
      if (this.authenticated) {
        this.userId = this.fireAuth.auth.currentUser.uid;
        console.log('User:ID: ' + this.userId);
      }
    });

    this.modalService.showModal.subscribe(value => {
      this.showModal = value;
    });
  }

  openModal(use: string) {
    if (use === 'login') {
      this.login = true;
      this.register = false;
      console.log(this.login + ' (should be true)');
    } else {
      this.register = true;
      this.login = false;
      console.log(this.register + ' (should be true)');
    }
    this.modalService.openModal();
  }

  userLogout() {
    this.userService.logout();
    this.openDropDown = false;
  }

}

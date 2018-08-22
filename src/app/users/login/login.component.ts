import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ModalService} from '../../Services/modal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService,
              private router: Router,
              public modalService: ModalService) {
  }

  ngOnInit() {
  }

  userLogin(email: string, password: string) {
    this.userService.login(email, password);
    this.userService.loading.subscribe(loading => {
      this.modalService.closeModal();
    });
    this.router.navigateByUrl('');
  }

}

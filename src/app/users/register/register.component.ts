import {Component, OnInit} from '@angular/core';

import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ModalService} from '../../Services/modal.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  trainerName: string;
  team: string;
  teamColor: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private userService: UserService,
              private router: Router,
              public modalService: ModalService) {
  }

  ngOnInit() {
  }

  registerUser(trainerName: string, team: string, email: string, password: string, passwordConfirm: string) {
    this.setTeamColor(team);
    if (password === passwordConfirm) {
      this.userService.registerNewUser(email, password, trainerName, team, this.teamColor);
      this.modalService.closeModal();
      this.router.navigateByUrl('');
    } else {
      alert('Error!, Passwords do not match.' + '  PassOne: ' + password + ' PassTwo: ' + passwordConfirm);
    }
  }

  setTeamColor(team) {
    switch (team) {
      case 'Mystic':
        this.teamColor = 'Blue';
        break;
      case 'Instinct':
        this.teamColor = 'Yellow';
        break;
      case 'Valor':
        this.teamColor = 'Red';
        break;
      default:
        break;
    }
  }

}

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../users.model';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  loading = true;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getSingleUser().subscribe(user => {
      this.user = user;
      this.userService.loading.subscribe(loading => {
        this.loading = loading;
      });
    });
  }

}

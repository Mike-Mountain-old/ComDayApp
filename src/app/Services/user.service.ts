import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

import {User, UserProfile} from '../users/users.model';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loadingSource = new BehaviorSubject<boolean>(false);
  loading = this.loadingSource.asObservable();

  authenticatedSource = new BehaviorSubject<boolean>(false);
  authenticated = this.authenticatedSource.asObservable();

  currentUser: any;
  user: User;
  uid: string;

  query: any;

  // userProfile: UserProfile;

  constructor(public fireAuth: AngularFireAuth,
              public db: AngularFirestore,
              public route: ActivatedRoute,
              public router: Router) {
  }

  login(email: string, password: string) {
    this.loadingSource.next(true);
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.loadingSource.next(false);
        this.authenticatedSource.next(true);
        console.log('CurrentUser: ');
        console.log(this.fireAuth.auth.currentUser);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
      });
  }

  logout() {
    this.loadingSource.next(true);
    this.fireAuth.auth.signOut()
      .then(callback => {
        this.loadingSource.next(false);
        this.authenticatedSource.next(false);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  registerNewUser(email: string, password: string, trainerName: string, team: string, teamColor: string) {
    this.loadingSource.next(true);
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(callback => {
        this.getUserId();
        this.createUserProfile(trainerName, team, teamColor);
        this.loadingSource.next(false);
        this.authenticatedSource.next(true);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
      });
  }

  getUserId() {
    this.currentUser = this.fireAuth.auth.currentUser;
    this.uid = this.currentUser.uid;
  }

  createUserProfile(trainerName: string, team: string, teamColor: string) {
    this.user = {
      uid: this.uid,
      email_address: this.currentUser.email,
      trainer_name: trainerName,
      team: team,
      team_color: teamColor
    };

    this.db.collection('users').doc(this.uid).set(this.user)
      .then(result => {
        console.log('result in CreateUserProfile(): ');
        console.log(result);
      });
  }

  viewUserProfile() {
    this.getUserId();
    this.query = this.db.collection('users', ref => ref.where('uid', '==', this.uid));
    console.log('Query: ');
    console.log(this.query);
  }
}


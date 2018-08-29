import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import {User} from './users.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  currentUser: any;
  uid: string;

  loadingSource = new BehaviorSubject<boolean>(false);
  loading = this.loadingSource.asObservable();

  authenticatedSource = new BehaviorSubject<boolean>(false);
  authenticated = this.authenticatedSource.asObservable();

  private userDoc: AngularFirestoreDocument<User>;
  singleUser: Observable<User>;

  constructor(public fireAuth: AngularFireAuth,
              public db: AngularFirestore,
              public router: Router) {
  }

  login(email: string, password: string) {
    this.loadingSource.next(true);
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
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

  logout() {
    this.loadingSource.next(true);
    this.fireAuth.auth.signOut()
      .then(callback => {
        this.loadingSource.next(false);
        this.authenticatedSource.next(false);
        this.router.navigateByUrl('');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  registerNewUserWithEmail(email: string, password: string, trainerName: string, team: string, teamColor: string) {
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

  getSingleUser(): Observable<User> {
    this.loadingSource.next(true);
    this.getUserId();
    this.userDoc = this.db.doc<User>('users/' + this.uid);
    this.singleUser = this.userDoc.valueChanges();
    this.loadingSource.next(false);
    return this.singleUser;
  }

}


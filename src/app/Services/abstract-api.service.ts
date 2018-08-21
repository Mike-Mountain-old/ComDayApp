import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractApiService {

  userId: any;

  constructor(private fireStore: AngularFirestore,
              private userService: UserService) {
  }

  getUserId(): any {
    this.userId = this.userService.getUserId();
    return this.userId;
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  showModalSource = new BehaviorSubject<boolean>(false);
  showModal = this.showModalSource.asObservable();

  constructor() {
  }

  openModal() {
    this.showModalSource.next(true);
  }

  closeModal() {
    this.showModalSource.next(false);
  }
}

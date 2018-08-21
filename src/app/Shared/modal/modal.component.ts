import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../Services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  showModal: boolean;
  @Input() useType: string;
  @Input() login: boolean;
  @Input() register: boolean;

  constructor(public modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.showModal.subscribe(value => {
      this.showModal = value;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

}

import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modalcontent.component.html',
})
export class ModalContentComponent {
  @Input() data: any;

  constructor(private activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}

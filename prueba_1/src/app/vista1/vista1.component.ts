import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //
import { ModalContentComponent } from '../modalcontent/modalcontent.component';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  public number = 1134903392;
  form: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.form = this.fb.group({
      number: null
    });
  }

  openModal() {
    console.log(this.form.value.number);
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.data = { telefono: this.form.value.number };
  }
  
  
}
  
  


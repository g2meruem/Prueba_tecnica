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
  public number = null;
  form: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.form = this.fb.group({
      number: null
    });
  }
  
  openModal() {
    console.log("Abriendo la modal...");
    console.log("Valor del número de teléfono:", this.form.value.number);
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.data = { telefono: this.form.value.number };
  }
  
  
}
  
  


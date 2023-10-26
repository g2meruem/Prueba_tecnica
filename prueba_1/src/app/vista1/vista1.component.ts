import { Component } from '@angular/core';
import { FormGroup, FormBuilder ,} from "@angular/forms"

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  public number= 1134903392;
  form
  constructor(fb:FormBuilder) { 
    this.form  = fb.group({
      number:null
    })
  }
}

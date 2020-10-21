import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coder } from '../coder.model'


@Component({
  selector: 'app-code-rform',
  templateUrl: './code-rform.component.html',
  styleUrls: ['./code-rform.component.css']
})
export class CodeRFormComponent implements OnInit {

  private fCoder: FormGroup;
  constructor(fb: FormBuilder) {
  this.fCoder = fb.group(new Coder('Kin','Pom', 1200));
  }

  submit() { 
    console.log(this.fCoder.value); 
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coder } from '../coder.model'
@Component({
  selector: 'app-coder-form',
  templateUrl: './coder-form.component.html',
  styleUrls: ['./coder-form.component.css']
})
export class CoderFormComponent implements OnInit {

  model: Coder;
  @Output() out = new EventEmitter<Coder>();
  
  constructor() { 
    this.model = new Coder('Bill','Babb', 4212);
  }

  submit() { 
    this.out.emit(this.model); 
  }

  ngOnInit(): void {
  }

}

 

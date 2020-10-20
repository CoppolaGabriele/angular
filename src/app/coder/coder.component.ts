import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Coder } from '../coder.model';

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {

  @Input() coder: Coder; 
  @Output() add100: EventEmitter<Coder>;
  constructor() { 
    this.add100 = new EventEmitter();
  }

  ngOnInit(): void {
  }

  addSalary(){
    this.coder.salary += 100;
    this.add100.emit(this.coder);

  }

}

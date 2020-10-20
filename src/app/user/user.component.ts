import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Con questa decoration si dice che questa variabile è pronta a ricevere dati in input
  @Input() user: User; 
  // L'evento che viene emesso in output sottoforma di istanza User
  @Output() liked: EventEmitter<User>;
  
  constructor() {
    this.liked = new EventEmitter();
   }

  ngOnInit(): void {
  }

  plusOne() {
    this.user.likes += 1;
    this.liked.emit(this.user);
    }

}

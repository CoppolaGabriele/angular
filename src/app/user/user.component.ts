import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Con questa decoration si dice che questa variabile è pronta a ricevere dati in input
  @Input() name: string; 

  constructor() {
   }

  ngOnInit(): void {
  }

}

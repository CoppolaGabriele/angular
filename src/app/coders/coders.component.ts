import { Component, OnInit } from '@angular/core';
import { Coder } from '../coder.model';

@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {

  coders: Array<Coder>;

  constructor() {
    this.coders = [new Coder('Giorgio', 'Pioli', 3000), new Coder('Paolo', 'Ciuffi', 1300),
     new Coder('Samuele', 'Panino', 2000)];
  }

  ngOnInit(): void {
  }

  addedMoney(coder: Coder) {
    console.log(`Added 100€, actual salary is ${coder.salary}`);
    }

}

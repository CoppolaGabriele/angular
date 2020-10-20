import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  add(id: HTMLInputElement, name: HTMLInputElement): boolean {
    // Da ES6 si può usare questo tipo di sintassi per le stringhe ` `
    // Viene creata una stringa dove vengono passati i parametri all'interno dell'input
    // dove "value" è l'attributo di ciò che viene inserito nell'input
    console.log(`(${id.value}, ${name.value})`);
    return false;
   }
   

  ngOnInit(): void {
  }

}

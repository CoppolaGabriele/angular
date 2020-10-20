import { Component } from '@angular/core';
import { Coder } from './coder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-First-App';


  addCoder(coder: Coder) {
    console.log(coder);
    }
}



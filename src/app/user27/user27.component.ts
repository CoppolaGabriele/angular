import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';


@Component({
  selector: 'app-user27',
  templateUrl: './user27.component.html',
  styleUrls: ['./user27.component.css']
})
export class User27Component implements OnInit {
  
  users: Array<User>;

  constructor(us: UsersService)  { 
    this.users = us.get();
  }
  
  ngOnInit(): void {
  }

  moreLikes(user: User) {
    console.log(`Likes for ${user.name} are ${user.likes}`);
    }

  

}


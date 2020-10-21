import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  public fUser: FormGroup;
  private service: UsersService;

  constructor(fb: FormBuilder, svc: UsersService) {
    this.fUser = fb.group(new User('Bob', 20));
    this.service = svc; 
   }

  add() {
    let newUser: User = this.fUser.value;
    console.log('creo new user', newUser);
    this.service.add(this.fUser.value);
   }

  ngOnInit(): void {
  }

}

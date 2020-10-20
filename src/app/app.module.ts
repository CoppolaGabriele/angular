import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CodersComponent } from './coders/coders.component';
import { CoderComponent } from './coder/coder.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    UsersComponent,
    AddItemComponent,
    CodersComponent,
    CoderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

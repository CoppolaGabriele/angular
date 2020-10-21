import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CodersComponent } from './coders/coders.component';
import { CoderComponent } from './coder/coder.component';
import { CoderFormComponent } from './coder-form/coder-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeRFormComponent } from './code-rform/code-rform.component';
import { ASorterPipe } from './a-sorter.pipe';
import { QuestionComponent } from './question/question.component';
import { User27Component } from './user27/user27.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';

const appRoutes: Routes = [
  { path: 'one', component: Routing1Component },
  { path: 'two', component: Routing2Component },
  { path: 'three', component: Routing3Component }
 ];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    UsersComponent,
    AddItemComponent,
    CodersComponent,
    CoderComponent,
    CoderFormComponent,
    CodeRFormComponent,
    ASorterPipe,
    QuestionComponent,
    User27Component,
    AddUsersComponent,
    Routing1Component,
    Routing2Component,
    Routing3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

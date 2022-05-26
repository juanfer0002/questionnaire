import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing'

import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    SignInComponent,
    HomeComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }

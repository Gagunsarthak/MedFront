import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSignupRoutingModule } from './app-signup-routing.module';
import { AppSignupComponent } from './app-signup.component';


@NgModule({
  declarations: [
    AppSignupComponent
  ],
  imports: [
    CommonModule,
    AppSignupRoutingModule
  ]
})
export class AppSignupModule { }

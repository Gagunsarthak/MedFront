import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSignupRoutingModule } from './app-signup-routing.module';
import { AppSignupComponent } from './app-signup.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppRegisterComponent } from './components/app-register/app-register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppAccountResetComponent } from './components/app-account-reset/app-account-reset.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppSignupComponent,
    AppLoginComponent,
    
    AppRegisterComponent,
         AppAccountResetComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppSignupRoutingModule
  ]
})
export class AppSignupModule { }

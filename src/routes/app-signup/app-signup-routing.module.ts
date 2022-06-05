import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSignupComponent } from './app-signup.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppRegisterComponent } from './components/app-register/app-register.component';


const routes: Routes = [
  {path: '',pathMatch: 'full' , redirectTo: '/signUp/login'},
  {path: 'login',  component: AppLoginComponent},
  {path: 'register',  component: AppRegisterComponent},
  
  
];
@NgModule({
  imports: [RouterModule.forChild([   {
    path: '',
    component: AppSignupComponent,
    // resolve: {
    //   content: ModeratorTimelineService,
    // },
    children: routes,
  },])],
  exports: [RouterModule]
})
export class AppSignupRoutingModule { }

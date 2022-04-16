import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSignupComponent } from './app-signup.component';


const routes: Routes = [
  {path: '',  component: AppSignupComponent},
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSignupRoutingModule { }

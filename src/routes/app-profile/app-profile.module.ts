import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProfileComponent } from './app-profile.component';
import { AppProfileRoutingModule } from './app-profile-routing.module';



@NgModule({
  declarations: [
    AppProfileComponent
  ],
  imports: [
    AppProfileRoutingModule,
    CommonModule
  ],
  
})
export class AppProfileModule {
  constructor(){
    console.log("Reached app profile module")
  }
  
 }

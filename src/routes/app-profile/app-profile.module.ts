import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProfileComponent } from './app-profile.component';
import { AppProfileRoutingModule } from './app-profile-routing.module';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppProfileComponent
  ],
  imports: [
    AppProfileRoutingModule,
    CommonModule,
    MatCardModule
  ],
  
})
export class AppProfileModule {
  constructor(){
    console.log("Reached app profile module")
  }
  
 }

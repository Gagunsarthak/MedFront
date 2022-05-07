import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProfileComponent } from './app-profile.component';
import { AppProfileRoutingModule } from './app-profile-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppProfileComponent
  ],
  imports: [
    AppProfileRoutingModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule,
    MatTabsModule,
    CommonModule
  ],
  
})
export class AppProfileModule {
  constructor(){
    console.log("Reached app profile module")
  }
  
 }

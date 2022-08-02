import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProfileComponent } from './app-profile.component';
import { AppProfileRoutingModule } from './app-profile-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileDetailsEditComponent } from './components/profile-details-edit/profile-details-edit.component';

@NgModule({
  declarations: [
    AppProfileComponent,
    ProfileDetailsEditComponent
  ],
  imports: [
    AppProfileRoutingModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  
})
export class AppProfileModule {
  constructor(){
    console.log("Reached app profile module")
  }
  
 }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppProfileComponent } from 'src/routes/app-profile/app-profile.component';
import { RootComponent } from './component/root/root.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatSidenavModule} from '@angular/material/sidenav';
// import { AppNavBarComponent } from './component/app-nav-bar/app-nav-bar.component';
import { AppPublicNavBarComponent } from './component/app-public-nav-bar/app-public-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppNavBarComponent } from './component/app-nav-bar/app-nav-bar.component';
import { AppSideNavBarComponent } from './component/app-side-nav-bar/app-side-nav-bar.component';
@NgModule({
  declarations: [
    // AppComponent
    RootComponent,
    // AppNavBarComponent,
    AppSideNavBarComponent,
    AppPublicNavBarComponent,
    AppNavBarComponent,
    AppSideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

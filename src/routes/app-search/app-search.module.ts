import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { AppSearchRoutingModule } from './app-search-routing.module';
import { AppSearchComponent } from './app-search.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DoctorSearchCardComponent } from './components/doctor-search-card/doctor-search-card.component';


@NgModule({
  declarations: [
    AppSearchComponent,
    FiltersComponent,
    DoctorSearchCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    AppSearchRoutingModule
  ]
})
export class AppSearchModule { }

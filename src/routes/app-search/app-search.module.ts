import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSearchRoutingModule } from './app-search-routing.module';
import { AppSearchComponent } from './app-search.component';


@NgModule({
  declarations: [
    AppSearchComponent
  ],
  imports: [
    CommonModule,
    AppSearchRoutingModule
  ]
})
export class AppSearchModule { }

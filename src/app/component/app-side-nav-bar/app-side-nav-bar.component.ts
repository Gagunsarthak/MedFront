import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-side-nav-bar',
  templateUrl: './app-side-nav-bar.component.html',
  styleUrls: ['./app-side-nav-bar.component.scss']
})
export class AppSideNavBarComponent implements OnInit {
  screenSizeIsLtMedium=false
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-app-user-dashboard',
  templateUrl: './app-user-dashboard.component.html',
  styleUrls: ['./app-user-dashboard.component.scss']
})
export class AppUserDashboardComponent implements OnInit {
  isMobileorTabScreen=false
  constructor( private configSvc:ConfigService) { }

  ngOnInit(): void {
    this.configSvc.isLtMedium$.subscribe((event)=>{this.isMobileorTabScreen=event})
  }

}

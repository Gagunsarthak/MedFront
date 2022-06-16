import { Component, HostListener, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss']
})
export class AppProfileComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobileOrTabView: boolean=false;
  constructor(
    private configSvc:ConfigService
  ) { 
  
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
   // this.onWindowResize()
    this.configSvc.isLtMedium$.subscribe((event)=>{this.isMobileOrTabView=event})
  }
  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
   
  //   if(this.getScreenWidth<775){
  //     this.isMobileOrTabView=true
  //   }else{
  //     this.isMobileOrTabView=false
  //   }
 
  // }
}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss']
})
export class AppProfileComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobileview: boolean=false;
  constructor() { 
    console.log("Comp reached")
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize()
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    //console.log("Width of screen is ",this.getScreenWidth)
    if(this.getScreenWidth<775){
      this.isMobileview=true
    }else{
      this.isMobileview=false
    }
  // this.openDialog()
  }
}

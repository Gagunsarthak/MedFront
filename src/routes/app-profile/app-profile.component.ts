import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { TFetchStatus } from 'src/app/constants/misc.constant';
import { ConfigService } from 'src/app/services/config.service';
import {  IDoctorTimeline } from '../app-user-dashboard/Models/doctor.model';
import { DoctorService } from '../app-user-dashboard/Services/doctor.service';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss']
})
export class AppProfileComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobileOrTabView: boolean=false;
  timelineFetchStatus: TFetchStatus = 'none'
  userId:string=''
  profRes:IDoctorTimeline
    
  constructor(
    private docSvc:DoctorService,
    private configSvc:ConfigService,
    private activated:ActivatedRoute 
  ) { 
  
  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
   // this.onWindowResize()
    this.configSvc.isLtMedium$.subscribe((event)=>{this.isMobileOrTabView=event})
  //getting userId from url
  this.activated.queryParamMap.subscribe(queryMap => {
    if (queryMap.has('id')) {
      this.timelineFetchStatus='fetching'
      this.userId= queryMap.get('id')||''
   //fetching details from service for the userId
    this.docSvc.fetchProfileData(this.userId,"doctor").subscribe(data=>{
   this.profRes=data
      console.log("profile is ",this.profRes)
    this.timelineFetchStatus='done'
  },(err)=>{console.log("error",err)})
    }else{
      this.timelineFetchStatus='error'
    }
  })
  

 

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

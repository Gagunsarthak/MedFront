import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { config } from 'rxjs';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';
import { TFetchStatus } from 'src/app/constants/misc.constant';
import { ConfigService } from 'src/app/services/config.service';
import {  IDocProfEditReq, IDoctorTimeline } from '../app-user-dashboard/Models/doctor.model';
import { DoctorService } from '../app-user-dashboard/Services/doctor.service';
import { ProfileService } from './services/profile.service';

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
  userId:String=''
  profRes:IDoctorTimeline
  color=['red','green','purple','yellow']

   //@ViewChild(TemplateRef) dialogTemplate: TemplateRef<any>;
  @ViewChild('dialogTemplate', { static: true }) dialogTemplate: TemplateRef<any>;
  
  dialogHeader: string;
  constructor(
    private docSvc:DoctorService,
    private configSvc:ConfigService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router:Router,
    private activated:ActivatedRoute ,
    private ProfileSvc:ProfileService
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
    this.docSvc.fetchProfileData(this.userId,"doctor4",['all']).subscribe(data=>{
   this.profRes=data.results
      console.log("profile is ",this.profRes)
    this.timelineFetchStatus='done'
  },(err)=>{console.log("error",err)})
    }else{
      this.timelineFetchStatus='error'
    }
  })
  

 

}
//dialog box

// open() {
//   return this.dialog.open(this.dialogTemplate, config);
// }
openDialog(attr:String,config?: MatDialogConfig) {
  if(this.isMobileOrTabView){
    config={
      // height: '60%',
      width: '90%',
      maxWidth: '100vw',
        maxHeight: '100vh',
      //  height: '100%',
       // width: '100%',
        panelClass: 'full-screen-modal'
  }
  }else{
    config={
      // height: '60%',
      width: '60%',
     // maxWidth: '100vw',
        maxHeight: '100vh',
      //  height: '100%',
       // width: '100%',
        //panelClass: 'full-screen-modal'
  }
  }

if(attr==='language'){
  this.dialogHeader='Language'
 
}else if(attr==='specialization'){
  this.dialogHeader='Specialization'
}else if(attr==='education'){
  this.dialogHeader='Education'
}else if(attr==='experience'){
  this.dialogHeader='Experience'
}else if(attr==='awards'){
  this.dialogHeader='AwardsPublications'
}
this.router.navigate([], {
  queryParams: {
    type: this.dialogHeader
  },
  queryParamsHandling: 'merge',
});
    const dialogRef = this.dialog.open(DialogComponent,config);
  
 
  dialogRef.afterClosed().subscribe(result => {
  console.log("Dialog result:",result);
    var changeProfileDetailsReq:IDocProfEditReq={
  id:this.profRes.identifier||'',
  role: 'doctor4'
    }
    if(result.event=='AwardsPublications'){
      console.log("Res from dialog",result.data.value)
      changeProfileDetailsReq.awardsAndPublications=[...this.profRes.awardsAndPublications,result.data.value]
    }
    if(result.event=='Experience'){
      console.log("Res from dialog",result.data.value)
      changeProfileDetailsReq.experience=[...this.profRes.experience,result.data.value]
    }
    if(result.event=='Education'){
      console.log("Res from dialog",result.data.value)
      changeProfileDetailsReq.education=[...this.profRes.education,result.data.value]
    }
    if(result.event=='Language'){
      console.log("Res from dialog",result.data.value.language)
      changeProfileDetailsReq.languages=[...this.profRes.languages,...result.data.value.language]
    }
    if(result.event=='Specialization'){
      console.log("Res from dialog",result.data.value)
      changeProfileDetailsReq.specialization=[...this.profRes.specialization,...result.data.value.specialization]
     // changeProfileDetailsReq.specialization=[...this.profRes.specialization,result.data.value]
    }
    
    console.log("The final update req is ",changeProfileDetailsReq)
    this.ProfileSvc.updateProfileExperienceDetails(changeProfileDetailsReq).subscribe((data)=>{
    
      let field=result.event
      console.log("Data updated successfully",field)
      if(!field){
        return
      }
      if(changeProfileDetailsReq.awardsAndPublications){
        this.profRes.awardsAndPublications=changeProfileDetailsReq.awardsAndPublications
  
       }else if(changeProfileDetailsReq.experience){
        this.profRes.experience=changeProfileDetailsReq.experience
       }else if(changeProfileDetailsReq.education){
        this.profRes.education=changeProfileDetailsReq.education
       }else if(changeProfileDetailsReq.languages){
        this.profRes.languages=changeProfileDetailsReq.languages
       }else if(changeProfileDetailsReq.specialization){
        this.profRes.specialization=changeProfileDetailsReq.specialization
       }
     
       this._snackBar.open('Data Updated Successfully', '', {
        duration: 3000
      });
    
    },()=>{
   //   console.log("Error in updating")
      this._snackBar.open("Error! Please try again", '', {
        duration: 3000
      });
    })
  });
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
  goToProductDetails(type:String) {
    console.log("went into product details",type)
    if(this.userId)
    this.router.navigate(['profile/details'], {queryParams:{id:this.userId,field:type}});
  }
  
}

function DialogContentExampleDialog(DialogContentExampleDialog: any) {
  throw new Error('Function not implemented.');
}


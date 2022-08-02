import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TFetchStatus } from 'src/app/constants/misc.constant';
import { DoctorService } from 'src/routes/app-user-dashboard/Services/doctor.service';

@Component({
  selector: 'app-profile-details-edit',
  templateUrl: './profile-details-edit.component.html',
  styleUrls: ['./profile-details-edit.component.scss']
})
export class ProfileDetailsEditComponent implements OnInit {
activeField:String=''
  userId: string;
  timelineFetchStatus: TFetchStatus = 'none'
  dataReceived:any
  constructor(  private activated:ActivatedRoute , private docSvc:DoctorService,) { }

  ngOnInit(): void {
    this.activated.queryParamMap.subscribe(queryMap => {
      if (queryMap.has('field')) {
        this.activeField=queryMap.get('field')||''
  }
  if (queryMap.has('id')) {
    this.userId=queryMap.get('id')||''
}

})
this.timelineFetchStatus='fetching'
  this.docSvc.fetchProfileData(this.userId,"doctor4",[this.activeField]).subscribe(data=>{
    this.dataReceived=data.results
       console.log("Data  is ",this.dataReceived)
     this.timelineFetchStatus='done'
   },(err)=>{console.log("error",err)
  this.timelineFetchStatus='error'
  })
    


}





}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctorTimeline } from '../Models/doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 url:string="https://mocki.io/v1/a2bac778-6696-4729-b482-ceadc00f0315"
  constructor(private httpClient: HttpClient) { }

  fetchProfileData(id:String,type:String): Observable<IDoctorTimeline> {
  
    return this.httpClient.get<IDoctorTimeline>(this.url)
  }
}

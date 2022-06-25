import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  otpFieldEnabled=false
  otp: string; showOtpComponent = true; 
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "", inputStyles: { width: "50px", height: "50px", color:'violet'}, }; 
  constructor() { }

  ngOnInit(): void {
  }
  onOtpChange(otp: any) {console.log("The event is ",otp) }

  sendOtp(){
    this.otpFieldEnabled=true
  }
}

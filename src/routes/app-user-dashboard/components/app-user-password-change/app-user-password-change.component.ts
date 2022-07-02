import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-user-password-change',
  templateUrl: './app-user-password-change.component.html',
  styleUrls: ['./app-user-password-change.component.scss']
})
export class AppUserPasswordChangeComponent implements OnInit {
  myForm: FormGroup ;
  confirmPassword=''
  bothPasswordsMatch: boolean=true;
  constructor(private fb: FormBuilder) { 
    this.createForm()
  }


  ngOnInit(): void {
  }
  createForm() {
    this.myForm = this.fb.group({
      oldPassword: ['', Validators.required],
       password: ['', Validators.required],
            confirmPassword: ['', Validators.required ],
           
    }
   
    );

    /////new approach
 
  
  }
  checkPasswordsmatch(){
    //  console.log("Event is ",this.confirmPassword)
      if(this.confirmPassword.length >=this.myForm.controls['password'].value.length)
      {
        if(this.confirmPassword===this.myForm.controls['password'].value){
          this.bothPasswordsMatch=true
        }else{
          this.bothPasswordsMatch=false
        }
      }
      
    }
}

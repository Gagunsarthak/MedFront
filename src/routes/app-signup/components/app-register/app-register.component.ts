import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit {
  confirmPassword=''
 submitted: boolean = false;
​

   myForm: FormGroup ;
  bothPasswordsMatch: boolean=true;
  constructor(
    
    private fb: FormBuilder
  ) {
    this.createForm()
   }

  ngOnInit(): void {
  
  
  }
  get f() {
    return this.myForm.controls;
  }
  createForm() {
    this.myForm = this.fb.group({
       username: ['', Validators.required ],
       email:['',Validators.required,Validators.email],
       mobileNumber:['', Validators.required ,Validators.min(5), Validators.max(10)],
       password: ['', Validators.required],
            confirmPassword: ['', Validators.required ],
            acceptTerms: [false, Validators.requiredTrue]
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

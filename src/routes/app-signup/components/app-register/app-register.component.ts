import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit {
  registerForm: FormGroup;
 submitted: boolean = false;
​
  title = 'My Angular Form Validation Example';
   myForm: FormGroup ;
  bothPasswordsMatch: boolean=true;
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm()
   }

  ngOnInit(): void {
    
    if(this.myForm.controls['password'].value ===this.myForm.controls['confirmPassword'].value){
      this.bothPasswordsMatch=true
    }else{
      this.bothPasswordsMatch=false
    }
  }
  createForm() {
    this.myForm = this.fb.group({
       username: ['', Validators.required ],
       mobileNumber:['', Validators.required ,Validators.min(5), Validators.max(10)],
       password: ['', Validators.required, Validators.minLength(6)],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
    });
  }
}

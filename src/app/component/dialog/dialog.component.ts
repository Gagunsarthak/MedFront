import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  dialogHeader = '';
  type: string;
  addedLangOrSpcl:String[]
  myForm: FormGroup;
  myExpForm: FormGroup;
  myAwardForm: FormGroup;
  myLangSpclForm: FormGroup;

  //lang
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
 // filteredFruits: Observable<string[]>;
  langorSpcl: string[] = [];
  @ViewChild('dataInput') dataInput: ElementRef<HTMLInputElement>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParamMap.has('type')) {
      this.type = this.activatedRoute.snapshot.queryParamMap.get('type') || '';
      this.dialogHeader = this.type;
    }
this.myLangSpclForm=this.fb.group({
  language:[''],
  specialization:['']
})
    this.myForm = this.fb.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      studyField: ['', Validators.required],
      description: [''],
    });

    this.myExpForm = this.fb.group({
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
    });
    this.myAwardForm = this.fb.group({
      awardName: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    // console.log('Name', form.value.institution);
    // console.log('Email', form.value.degree);
    // console.log('Message', form.value.message);
    this.dialogRef.close({ event: this.dialogHeader, data: this.myForm });
  }
  onExpSubmit(form: FormGroup) {
    this.dialogRef.close({ event: this.dialogHeader, data: this.myExpForm });
  }
  onAwardSubmit(form: FormGroup) {
    this.dialogRef.close({ event: this.dialogHeader, data: this.myAwardForm });
  }
  submitLangOrSpclData(){
    if(this.type=='Language' ){
      console.log("frtt",this.langorSpcl)
      this.myLangSpclForm.patchValue({
        language: this.langorSpcl, 
        // formControlName2: myValue2
      });
    }else if(this.type=='Specialization'){
      
      this.myLangSpclForm.patchValue({
        specialization: this.langorSpcl, 
        // formControlName2: myValue2
      });
    }
    this.dialogRef.close({ event: this.dialogHeader, data: this.myLangSpclForm });
//this.myLangSpclForm.controls.get('language').setValue(this,this.fruitCtrl)
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
console.log("Event is ",event)
    // Add our fruit
    if (value) {
      this.langorSpcl.push(value);
      console.log("ADD EVENT ",this.langorSpcl)
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.langorSpcl.indexOf(fruit);

    if (index >= 0) {
      this.langorSpcl.splice(index, 1);
    }
  }


}

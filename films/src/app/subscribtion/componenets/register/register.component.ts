import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regexValidator } from '../validators/regexValidator';
import {  verifPasswordValidator} from '../validators/verifyPasswordValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nameFromServer:string = 'Dor';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      "firstName": new FormControl(this.nameFromServer, Validators.required),
       "lastName": new FormControl("", [Validators.required,regexValidator(new RegExp('[A-Za-z0-9]{5,5}'))]),
       passwordGroup : new FormGroup({
        "password": new FormControl("", [Validators.required,Validators.maxLength(4)]),
        "verifyPassword": new FormControl("", [Validators.required]),
      })
    }) 
  }


  pn(){
    console.log(this.form);
  }
  onSubmit(){

  }


   
}



import { Component, OnInit } from '@angular/core';
import { FieldPasswordComponent } from '../fields-components/field-password/field-password.component';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = 'password-login'
  label: string = 'סיסמא';
  control: FormControl = new FormControl(null);
  placeholder: string = 'הזן סיסמא';
  explanationText: string = 'טקסט נוסף לקומפוננטה';

  constructor() { }

  ngOnInit(): void {
  }

  doOnBlurPassword(str: string){
    alert(str);
  }

}

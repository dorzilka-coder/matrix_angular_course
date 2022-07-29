import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FieldPasswordComponent } from '../fields-components/field-password/field-password.component';
import {FormControl, NgForm} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  model = {}; 
  submitted = false; 
  onSubmit(f: NgForm) {
      console.log(f);
      console.log(f.value.userData.name);
     }

  id: string = 'password-login'
  label: string = 'סיסמא';
  control: FormControl = new FormControl(null);
  placeholder: string = 'הזן סיסמא';
  explanationText: string = 'טקסט נוסף לקומפוננטה';


   @ViewChild('passRef')
    passwordRef: FieldPasswordComponent;

  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  doOnBlurPassword(str: string){
    alert(str);
  }

}

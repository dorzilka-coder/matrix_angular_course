import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { FieldUsernameComponent } from './componenets/fields-components/field-username/field-username.component';
import { FieldPasswordComponent } from './componenets/fields-components/field-password/field-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FieldUsernameComponent,
    FieldPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubscribtionModule { }

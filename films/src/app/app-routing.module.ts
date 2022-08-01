import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './subscribtion/componenets/login/login.component';
import { RegisterComponent } from './subscribtion/componenets/register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component : RegisterComponent
  },
  {
    path: 'reg',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

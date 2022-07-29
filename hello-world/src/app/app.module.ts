import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-comp/first-comp.component';
import { UnlessDirective } from './directives/unless.directive';
import { MyColorDirective } from './directives/my-color.directive';
import { MyColorWithRedererDirective } from './directives/my-color-with-renderer.directive';

import { GetLast } from "./pipes/getLast";
import { FilterByAge } from "./pipes/filterByAge";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UnlessDirective,
    MyColorDirective,
    MyColorWithRedererDirective,
    GetLast,
    FilterByAge
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

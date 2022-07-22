import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubscribtionModule} from '../app/subscribtion/subscribtion.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubscribtionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

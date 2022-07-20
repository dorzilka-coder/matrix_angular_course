import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstComponent implements OnInit {

  titleName : string = 'Hello';
  constructor(private title: Title) {
    this.title.setTitle(this.titleName);
   }

  ngOnInit(): void {
  }

}

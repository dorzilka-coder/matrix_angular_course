import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Person } from '../models/person';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstComponent implements OnInit {

  titleName : string = 'Directives exampels';
  persons: Array<Person> = [];
  selectedValue: string = '';
  
  constructor(private title: Title) {
    this.title.setTitle(this.titleName);
    this.fillPersons();
   }

  ngOnInit(): void {
  }

  clearPersons(): void{
    this.persons = [];
  }
  fillPersons(): void{
    this.persons.push(new Person("Dor",34));
    this.persons.push(new Person("Dana",30));
  }
}

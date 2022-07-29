import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Person } from '../models/person';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],
})
export class FirstComponent implements OnInit {
  condition : boolean = false;
  filterByAge : number;
  titleName : string = 'Directives exampels';
  persons: Array<Person> = [];
  selectedValue: string = '';
  
  asyncVal = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve('Hello  im async pipe');
    }, 3000);
  })

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
    this.persons.push(new Person("Dor",34,250.2, new Date("1988-06-22"),"123456789"));
    this.persons.push(new Person("Dana",30, 2656,new Date("1987-08-11"),"123"));
  }

  outOfInputField(val : string){
    console.log('echo : ' + val );
  }
}

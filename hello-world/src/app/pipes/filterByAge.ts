import {Pipe, PipeTransform} from '@angular/core'
import { Person } from "../models/person";

@Pipe({
    name: 'filterByAge'
})

export class FilterByAge implements PipeTransform{
    transform(persons: Array<Person>, ageFiler: number) : Array<Person> {
         var result : Array<Person> = persons.filter(p=> p.age === ageFiler)
         return result.length == 0 ? persons : result;
    }

}
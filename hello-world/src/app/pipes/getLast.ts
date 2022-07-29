import {Pipe,  PipeTransform } from "@angular/core";

@Pipe({
    name: 'getLast'
})

export class GetLast implements PipeTransform{
    transform(valueStr: string, last: number) {
        if(last > valueStr.length){
            return valueStr;
        }else{
            return valueStr.substring(valueStr.length - last , valueStr.length)
        }
    }

}
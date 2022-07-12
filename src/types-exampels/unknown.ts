var f1 : any;
var f2 : unknown;

var str : string = f1;
//str = f2; //Type 'unknown' is not assignable to type 'string'

//Use case : unknown is for you to decalare that you must allways and make validation for the unknown argumnet

function example(param : unknown):void{
    if(typeof param == "number"){
        console.log('calculate');
    }else if(typeof param == "string"){
        console.log('type something');
    }else{
        console.log('do something');
    }

}
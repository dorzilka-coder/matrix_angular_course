import { resourceUsage } from "process";

interface Kill{
    Kill(): boolean | void;
}

abstract class Person{
    name: string;
    age: number;

    constructor(name: string, age : number ){
        this.age = age;
        this.name = name;
    }

}
export class Policeman extends Person  implements Kill{
    rank: string;
    constructor(name: string, age : number, rank: string){
        super(name,age);
        this.rank = rank;
    }
    Kill(): boolean {
        console.log('paw paw warning shoots');
        console.log('kill');
        return true;
    }
}

export class Criminal extends Person  implements Kill{
    mob: string;
    constructor(name: string, age : number, mob: string){
        super(name,age);
        this.mob = mob;
    }
    Kill(): void {
        console.log('kill');
    }
}

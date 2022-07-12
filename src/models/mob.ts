import {setTimeout} from "timers/promises";​

interface Kill{
    Kill(): Promise<boolean> | void;
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
   async Kill(): Promise<boolean> {
        await this.useWarningShoots();
        return this.handle();
    }
    
    async useWarningShoots(){
        console.log('paw paw warning shoots');
        await setTimeout(5000);
    }

    handle(): boolean{
        var randomNumber = Math.random();
        if(randomNumber > 0.5){
            console.log('criminal is resisting');
            console.log('shoot to kill! pow pow');
            return true;
        }else{
            console.log('criminal stooped atacking');
            console.log('officer put is gun away');
            return false;
        }

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

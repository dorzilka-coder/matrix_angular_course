export class Person{
    age: number;
    name: string;
    balance: number;
    birthdate: Date;
    id: string;

    constructor(name: string, age: number, balance: number,birthdate: Date, id: string){
        this.age = age;
        this.name = name;
        this.balance = balance;
        this.birthdate = birthdate;
        this.id = id;
    }
}
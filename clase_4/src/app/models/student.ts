export class Student{
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age:number,status:boolean){
        this.name = name
        this.age = age
        this.status = status
    }

    toggleStatus() :void {
        this.status = !this.status
    }
}
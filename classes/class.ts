class Person{

    name:string
    age:number
    
    constructor (name:string,age:number){
        this.name=name,
        this.age=age
    }
    getName():string{
    return `person name is ${this.name}`
    }

}

const p1= new Person("Anuja",22)
console.log(p1.getName());
// declering interface
interface admin{
    name:string,
    isloggedin:boolean,
    
}

const Admin:admin={
    name:"Anuja",
    isloggedin:true,
}
console.log(Admin);

// optional properties nad readonly properties
interface users{
    readonly id:number,
    name:string,
    age?:number

}
const person:users={
    id:102,
    name:"Anuja",
    
}
// person.id=100; cannot assign 
console.log(person.name);
console.log(person.age);

//extending interface
interface animals{
    type:string,
    sound:(prop:string)=>string
}
interface dog extends animals{
    name:string,
}

const mypet:dog={
    type:"dog",
    name:"sherro",
    sound:(sound)=>{
        return `${mypet.type} does ${sound}`
    }

}
console.log(mypet.sound("bark"));

//implementing interface 

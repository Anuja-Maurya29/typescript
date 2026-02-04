// function in typescript 
// each parameter should be define by types

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(3,6));
// console.log(add(2,"5"));

//void return type

function greet(msg:string):void{
    console.log(msg);
}
 greet("hello there!")
console.log( typeof greet);

function getTime():number{
return new  Date().getTime()
}
console.log(getTime());


//optional parameters
function multiply(a:number,b:number,c?:number):number{
    return a*b*(c||1);
}
console.log(multiply(2,5))

//default parameter
function employee(name:string,age:number,company:string="bestpeers"):string{
    return `${name} works in ${company} and is of ${age} years`

}
console.log(employee("Anuja",21));
console.log(employee("archi",21,"iopex"));

//named parameters
function divide({divident,divisor}:{divident:number,divisor:number}):number{
    return divident/divisor
}

console.log(divide({divident:20,divisor:5}));

// reverse a string 

function reverseString({text}:{text:string}):string{

    let reverse = text.split('').reverse().join('')
    return reverse
}

console.log(reverseString({text:"Anuja"}));

// rest parameters but they must be array []

 function sum (a:number,b:number,rest:number[]):number{
    return a+ b+rest.reduce((acc,cv)=>{
        return acc+cv
    },0)
 }

 console.log(sum(1,2,[3,4,5]));


 // type alias
 
 type area =(radius:number)=>number

const areaOfCircle: area =(radius)=>{
    return Math.floor(Math.PI*radius*radius)
}
console.log(areaOfCircle(5));



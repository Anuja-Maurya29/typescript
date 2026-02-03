// types in ts
// primitive and refrence
// 1. primitive: pass by value
let a:number= 20;
let msg:string = "hello"
console.log(typeof a, a);
console.log(typeof msg,msg);
let islogin:boolean = true;
console.log(typeof islogin,islogin);

//explicit type and inference
function greet (name:string):string{
    return `hello${name}`

}
console.log(greet("Anuja"));
let price = 100;
price = 200;
// price = "300";
console.log(price);



/*
//type guards in typescript
1.type of
2.truthiness
3.instanceof

*/
// type of 
 function types(value:string|number){
if(typeof value ==="string")
{
    return `${value.toUpperCase()}`
}
else{
    return `${value.toFixed(2)}`
}

 }

console.log( types("Anuja"));
 console.log(types(48.346));

 // 2. thruthiness

 function greet(msg?:string){
    if(msg){
        return ` hello ${msg}`
    }
    else{
        return ` happy diwali`
    }
 }
console.log(greet());
console.log(greet("Anuja"));

//3 instanceof 

class A{
    show(){
        console.log("Class A show method");
    }
}

class B extends A{
   show(){
console.log("Class B show method");
   } 
}

function call(value:A|B){
    if(value instanceof(B)){
        console.log(typeof value,value);
        value.show()
    }
    else{
        console.log(typeof value,value);
        value.show()
    }

}
let a = new A()
let b = new B()

call(a)
call(b)
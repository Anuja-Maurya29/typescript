// arrays in js 
let nums =[10,20,30,40] 
console.log(nums);

// arrays in typescript refrence 
// let arrayName:type[]=[Data ...] syntax
let names:readonly string[]=["anuja","kushi","vibhavi"]
console.log(names);
// readonly prevent arrays from being changed
// names.push(40)

let ages=[20,30,21,23,29] //type-error 
// ages.push("anuja")  ts inferece  


// function with alias

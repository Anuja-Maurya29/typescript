"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// types in ts
// primitive and refrence
// 1. primitive:
let a = 20;
let msg = "hello";
console.log(typeof a, a);
console.log(typeof msg, msg);
let islogin = true;
console.log(typeof islogin, islogin);
//explicit type and inference
function greet(name) {
    return `hello${name}`;
}
console.log(greet("Anuja"));
let price = 100;
price = 200;
// price = "300";
console.log(price);
//# sourceMappingURL=app.js.map
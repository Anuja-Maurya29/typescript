"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
//type guards in typescript
1.type of
2.truthiness
3.instanceof

*/
// type of 
function types(value) {
    if (typeof value === "string") {
        return `${value.toUpperCase()}`;
    }
    else {
        return `${value.toFixed(2)}`;
    }
}
console.log(types("Anuja"));
console.log(types(48.346));
// 2. thruthiness
function greet(msg) {
    if (msg) {
        return ` hello ${msg}`;
    }
    else {
        return ` happy diwali`;
    }
}
console.log(greet());
console.log(greet("Anuja"));
//3 instanceof 
class A {
    show() {
        console.log("Class A show method");
    }
}
class B extends A {
    show() {
        console.log("Class B show method");
    }
}
function call(value) {
    if (value instanceof (B)) {
        console.log(typeof value, value);
        value.show();
    }
    else {
        console.log(typeof value, value);
        value.show();
    }
}
let a = new A();
let b = new B();
call(a);
call(b);
let s1 = {
    name: "Anuja",
    id: 101,
    age: 22,
    course: "MERN"
};
if ("age" in s1) {
    console.log(s1.age);
}
//5 equality|userdefined
//# sourceMappingURL=guards.js.map
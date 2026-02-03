"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value1 = 99;
console.log(value1);
value1 = "Anuja";
console.log(value1);
// unions as parameters 
function getAge(age) {
    if (typeof age == "number") {
        console.log(`${age}: its a number type`);
    }
    if (typeof age === "string") {
        console.log(`${age}: its a string type`);
    }
}
getAge(22);
getAge("Twenty Two");
//# sourceMappingURL=unions.js.map
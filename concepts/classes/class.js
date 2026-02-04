"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    getName() {
        return `person name is ${this.name}`;
    }
}
const p1 = new Person("Anuja", 22);
console.log(p1.getName());
//# sourceMappingURL=class.js.map
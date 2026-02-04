"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin = {
    name: "Anuja",
    isloggedin: true,
};
console.log(Admin);
const person = {
    id: 102,
    name: "Anuja",
};
// person.id=100; cannot assign 
console.log(person.name);
console.log(person.age);
const mypet = {
    type: "dog",
    name: "sherro",
    sound: (sound) => {
        return `${mypet.type} does ${sound}`;
    }
};
console.log(mypet.sound("bark"));
//implementing interface 
//# sourceMappingURL=interface.js.map
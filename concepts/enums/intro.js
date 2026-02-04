"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
    Role["seller"] = "seller";
})(Role || (Role = {}));
console.log(Role);
const user1 = {
    name: "Anuja",
    email: "anujamaurya@gmial.com",
    password: 'anu',
    role: Role.admin
};
// console.log(user1.area);
console.log(user1);
//# sourceMappingURL=intro.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
//type guards in typescript
1.type of
2.truthiness
3.instanceof

*/
// type of 
function types(value) {
    if (typeof value === "string") {
        return "".concat(value.toUpperCase());
    }
    else {
        return "".concat(value.toFixed(2));
    }
}
console.log(types("Anuja"));
console.log(types(48.346));
// 2. thruthiness
function greet(msg) {
    if (msg) {
        return " hello ".concat(msg);
    }
    else {
        return " happy diwali";
    }
}
console.log(greet());
console.log(greet("Anuja"));
//3 instanceof 
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.show = function () {
        console.log("Class A show method");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.show = function () {
        console.log("Class B show method");
    };
    return B;
}(A));
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
var a = new A();
var b = new B();
call(a);
call(b);

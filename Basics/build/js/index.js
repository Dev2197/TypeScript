"use strict";
let x = "typescript";
let arr = ["a", "b", "c"];
let mix = ["a", 1, true];
let myObj;
let obj = {
    prop1: "a",
    prop2: 1,
    prop3: false,
};
let obj2 = {
    prop1: "a",
    prop2: 1,
    prop3: false,
    prop4: ["a", "b", 1],
    prop5: "a",
};
let obj3;
obj3 = obj2;
// console.log(obj3);
const myFunction = (a, b) => {
    return a + b;
};
const myFunction2 = (a, b) => {
    console.log(a + b);
};
console.log(myFunction(1, 2));
myFunction2(3, 2);
const myFunction3 = (a, b) => {
    return a + b;
};
console.log(myFunction3(10, 2));

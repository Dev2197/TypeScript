"use strict";
// The basic concept of generics is to create reusable functions that can work with different types.
// Generics are a way to create reusable components.
const identify = (agr) => {
    return agr;
};
const result = identify("Hello");
function pair(a, b) {
    return [a, b];
}
const result2 = pair(10, "hello");

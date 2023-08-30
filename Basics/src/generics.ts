// The basic concept of generics is to create reusable functions that can work with different types.
// Generics are a way to create reusable components.

const identify = <T>(agr: T):T=>{
    return agr;
}

const result = identify("Hello");

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const result2 = pair(10, "hello");

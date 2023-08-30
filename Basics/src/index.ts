let x: string = "typescript";

let arr: string[] = ["a", "b", "c"];

let mix: [string, number, boolean] = ["a", 1, true];

let myObj: object;

let obj: { prop1: string; prop2: number; prop3: boolean } = {
  prop1: "a",
  prop2: 1,
  prop3: false,
};

type objType = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: (string | number)[];
  prop5?: string | number;
};

let obj2: objType = {
  prop1: "a",
  prop2: 1,
  prop3: false,
  prop4: ["a", "b", 1],
  prop5: "a",
};

let obj3: objType;
obj3 = obj2;
// console.log(obj3);

const myFunction = (a: number, b: number): number => {
  return a + b;
};
const myFunction2 = (a: number, b: number): void => {
  console.log(a + b);
};

console.log(myFunction(1, 2));
myFunction2(3, 2);

type myFunctionType = (a: number, b: number) => number;

const myFunction3: myFunctionType = (a, b) => {
  return a + b;
};

console.log(myFunction3(10, 2));

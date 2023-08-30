interface Student {
  [key: string]: string | number;
  name: string;
  course: string;
  rollNo: number;
}

const student1: Student = {
  name: "John",
  course: "typescript",
  rollNo: 1,
};

// for(let key in student1){
//     console.log(key, student1[key]);
// }

///////////////////////////////////////
// Record Utility Type

// The Record utility type in TypeScript is used to define an object type with specific keys
// and a consistent value type for all those keys.
// The Record utility type is a mapped type that takes two type parameters.
type VehicleType = "car" | "color" | "mileage";
type VehicleDetails = Record<VehicleType, string | number>;

const vehicle1: VehicleDetails = {
  car: "BMW",
  color: "red",
  mileage: 1000,
};

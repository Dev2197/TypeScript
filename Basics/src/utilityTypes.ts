//Partial
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;  // { name?: string; age?: number; }

// Required
type RequiredUser = Required<PartialUser>; // { name: string; age: number; }

// Readonly
type ReadonlyUser = Readonly<User>; // { readonly name: string; readonly age: number; }
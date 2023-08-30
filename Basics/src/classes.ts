// class Coder {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("John", 30);
// console.log(person1);
///////////////////////////////////////

// Public, private, and protected modifiers
class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }
  updateBalance(newBalance: number): number {
    return (this.balance = newBalance);
  }
}

const Account1 = new BankAccount(1000);
// console.log(Account1.getBalance());
/////////////////////////////

class Vehicle {
  protected speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  constructor(speed: number) {
    super(speed);
  }
  getSpeed(): number {
    return this.speed;
  }
  accelerate(): number {
    return (this.speed += 20);
  }
}

const bike1 = new Bike(20);
console.log(bike1.getSpeed());
bike1.accelerate();
console.log(bike1.getSpeed());

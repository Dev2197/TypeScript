"use strict";
// class Coder {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("John", 30);
// console.log(person1);
///////////////////////////////////////
// Public, private, and protected modifiers
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    updateBalance(newBalance) {
        return (this.balance = newBalance);
    }
}
const Account1 = new BankAccount(1000);
// console.log(Account1.getBalance());
/////////////////////////////
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
}
class Bike extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    getSpeed() {
        return this.speed;
    }
    accelerate() {
        return (this.speed += 20);
    }
}
const bike1 = new Bike(20);
console.log(bike1.getSpeed());
bike1.accelerate();
console.log(bike1.getSpeed());

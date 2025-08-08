// //es6
// class Person {
//   constructor(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
// }

// // function Person(id, name, age) {
// //   this.id = id;
// //   this.name = name;
// //   this.age = age;
// // }

// class User extends Person {
//   constructor(id, name, age) {
//     super(id, name, age);
//     this.pre = "normal";
//   }
//   sayHello() {
//     console.log(`Hello, I'm ${this.name} and I'm a ${this.pre} person.`);
//   }
// }

// const p = new User("Ali", 25);
// p.sayHello(); // Hello, I'm Ali and I'm a normal person.
// String.prototype.love = "brazily";

// let x = new String("mx");
// console.log(x);
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello = function () {
    console.log("hi");
  };
}
// Person.prototype.sayHello = () => {
//   console.log("hi");
// };
const p1 = new Person("Ali");
const p2 = new Person("Mona");

console.log(p1.sayHello === p2.sayHello);

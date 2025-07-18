// ==================== 1. let & const ====================
let username = "Mohammed";
const age = 25;
console.log(`Username: ${username}, Age: ${age}`);

// ==================== 2. Arrow Functions ====================
const sum = (a, b) => a + b;
const sum2 = (a, b) => {
  return a + b;
};
console.log("Sum:", sum(5, 3));
console.log("Sum2:", sum2(5, 3));

// ==================== 3. Template Literals ====================
const greeting = `Hello, ${username}. You are ${age} years old.`;
console.log(greeting);

// ==================== 4. Destructuring ====================
const user = { name: "Ali", job: "Developer" };
let { name, job } = user;
console.log("Name:", name, "Job:", job);

const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log("First:", first, "Second:", second, "Third:", third);

// ==================== 5. Spread & Rest ====================
// Spread
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
const obj1 = {
  ...user,
  age: 99,
};
console.log(obj1.age);
// Rest
function total(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log("Total:", total(1, 2, 3, 4));

// ==================== 6. Modules (Import / Export) ====================
// Note: This part works only in modules or separate files
// In file mathUtils.js:
// export const multiply = (a, b) => a * b;
// In another file:
// import { multiply } from './mathUtils.js';
// console.log(multiply(2, 3));

// ==================== 7. Default Parameters ====================
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet();
greet("Sarah");

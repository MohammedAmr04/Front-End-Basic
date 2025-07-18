function sum(num1, num2, callback) {
  console.log(num1 + num2);

  return callback();
}

sum(1, 2, () => console.log("hello"));
console.log("last");

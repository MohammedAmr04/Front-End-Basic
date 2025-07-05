// ===================================
// 🧮 Initialize a variable
// ===================================
let n = 0;

// ===================================
// ⏲️ setTimeout Example (empty block)
// ===================================
setTimeout(() => {
  // Code here will execute after 2 seconds
}, 2000);

// ===================================
// ⏲️ setTimeout with cancel
// ===================================
let time = setTimeout(() => {
  console.log(++n);
}, 5000);
clearTimeout(time); // Cancel before execution

// ===================================
// 👋 Delayed greeting
// ===================================
function hallo(name) {
  console.log(name);
}
setTimeout(hallo, 3000, "brazilyy");

// ===================================
// ⏱️ setInterval Example (Clock)
// ===================================
let clock = setInterval(() => {
  let now = new Date().toLocaleTimeString();
  console.log("Current Time:", now);
}, 1000);

setTimeout(() => {
  clearInterval(clock);
  console.log("Clock stopped ⏱️");
}, 10000);

// ===================================
// 🌐 window.open + window.close
// ===================================

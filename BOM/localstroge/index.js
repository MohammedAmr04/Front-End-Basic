// set

window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Get Key
console.log(window.localStorage.key(0));

// Remove One
window.localStorage.removeItem("color");

// Remove All
window.localStorage.clear();

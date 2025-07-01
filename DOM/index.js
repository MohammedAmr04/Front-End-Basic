//dom selectors
let x = document.getElementById("root"); // return one element
console.log("🟩 x: ", x);

x = document.getElementsByTagName("p"); // return collections of elements
console.log("🟩 x: ", x);

x = document.getElementsByClassName("p"); // return collections of elements
console.log("🟩 x: ", x);

x = document.getElementsByName("gender"); // return node list
console.log("🟩 x: ", x);

x = document.querySelectorAll("p"); // return node list
console.log("🟩 x: ", x);

x = document.querySelector("p"); // return node list
console.log("🟩 x: ", x);

//accessing dom selectors
let myElement = document.querySelector("section");
console.log(myElement.children); // not space - not comments even the comment was created with js as a elements => document.createComment('createComment'
console.log(myElement.childNodes); // include space - incluse comments
console.log(myElement.firstChild); // include space - include comments return node
console.log(myElement.lastChild); // include space - include comments return node
console.log(myElement.firstElementChild); // no space - no comments return element
console.log(myElement.lastElementChild); // no space - no comments return element

//styles
myElement.style.backgroundColor = "red";
myElement.style.removeProperty("background-color");
myElement.style.setProperty("font-size", "40px", "important");

// class
myElement.classList.add("section");
myElement.classList.replace("section", "red");
myElement.classList.toggle("red");
myElement.classList.remove("red");

console.log(myElement.classList.contains("section"));
console.log(myElement.classList.item(1));

//attribute
let gender = document.getElementById("gender");
console.log(gender.getAttribute("name"));
gender.ariaLabel = "gender";
// /*
//   DOM [Create Elements]
//   - createElement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - appendChild
// */

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);
myElement.onclick = function () {
  document.body.style.backgroundColor = "blue";
};

// myElement.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

myElement.addEventListener("click", () => {
  console.log("click one");
});

myElement.addEventListener("click", () => {
  console.log("click two");
});

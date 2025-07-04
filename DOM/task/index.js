let inputField = document.createElement("input");
inputField.type = "number";
inputField.classList.add("form-control");
inputField.classList.add("my-5");
inputField.classList.add("w-50");
inputField.classList.add("mx-auto");
inputField.placeholder = "enter number";
let number = 0;
inputField.addEventListener("change", (e) => {
  number = e.target.value;
  numberDiv.innerHTML = number;
});

let numberDiv = document.createElement("div");
numberDiv.style.cssText =
  "background-color: red; font-size:50px; color: white ;width:fit-content ;padding:30px 40px;text-align:center; margin:40px auto";
numberDiv.innerHTML = number;
document.body.appendChild(inputField);
document.body.appendChild(numberDiv);

//promise
function displayNames(d) {
  let container = "";
  for (let index = 0; index < d.length; index++) {
    container += `
    <div>${d[index].name}</div>
    `;
  }
  document.body.innerHTML = container;
}
async function getData() {
  console.log("1 - Start");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(" Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      console.log("2 - Users:", data);
      data;
      displayNames(data);
    })
    .catch((error) => {
      console.error(" Error:", error.message);
    });
}

console.log("0 - Before getData");
getData();

console.log("4 - After getData");

// async function getData() {
//   console.log("1 - Start");

//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   console.log("2 - Users:", data);
//   console.log("3 - End");
// }

// console.log("0 - Before getData");

// getData();

// console.log("4 - After getData");

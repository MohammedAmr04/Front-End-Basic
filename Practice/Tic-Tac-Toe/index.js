let board = document.createElement("div");
board.classList.add("board");
let cells = [];
let currentPlayer = "X";
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diags
];
for (let i = 0; i < 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("value", null);
  cell.setAttribute("index", i + 1);
  cells.push(cell);
  board.appendChild(cell);
}

// Create turn label
function defaultTurnLabel() {
  let turnLabel = document.getElementById("turn-label");
  if (!turnLabel) {
    turnLabel = document.createElement("div");
    turnLabel.id = "turn-label";
    document.body.insertBefore(turnLabel, document.body.firstChild);
  }
  turnLabel.textContent = `Turn: ${currentPlayer}`;
}

defaultTurnLabel();

function showPopup(message) {
  let popup = document.createElement("div");
  popup.className = "popup-overlay";
  let box = document.createElement("div");
  box.className = "popup-box";
  box.innerHTML = `<h2>${message}</h2><button id='close-popup'>OK</button>`;
  popup.appendChild(box);
  document.body.appendChild(popup);
  document.getElementById("close-popup").onclick = function () {
    popup.remove();
  };
}

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    const va = cells[a].getAttribute("value");
    const vb = cells[b].getAttribute("value");
    const vc = cells[c].getAttribute("value");
    if (va !== "null" && va === vb && vb === vc) {
      setTimeout(() => showPopup(`${va} wins!`), 10);
      //remove event
      cells.forEach((cell) =>
        cell.removeEventListener("click", handleCellClick)
      );
      updateTurnLabelEnd(`${va} wins!`);
      return true;
    }
  }
  // Check for draw
  let allFilled = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].getAttribute("value") === "null") {
      allFilled = false;
      break;
    }
  }
  if (allFilled) {
    setTimeout(() => showPopup("Draw!"), 10);
    cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
    updateTurnLabelEnd("Draw!");
    return true;
  }
  return false;
}
// function checkWinner() {
//   for (let pattern of winPatterns) {
//     const [a, b, c] = pattern;
//     const va = cells[a].getAttribute("value");
//     const vb = cells[b].getAttribute("value");
//     const vc = cells[c].getAttribute("value");
//     if (va !== "null" && va === vb && vb === vc) {
//       setTimeout(() => showPopup(`${va} wins!`), 10);
//       cells.forEach((cell) =>
//         cell.removeEventListener("click", handleCellClick)
//       );
//       updateTurnLabelEnd(`${va} wins!`);
//       return true;
//     }
//   }
//   // Check for draw
//   if (cells.every((cell) => cell.getAttribute("value") !== "null")) {
//     setTimeout(() => showPopup("Draw!"), 10);
//     cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
//     updateTurnLabelEnd("Draw!");
//     return true;
//   }
//   return false;
// }

function updateTurnLabelEnd(msg) {
  let turnLabel = document.getElementById("turn-label");
  if (turnLabel) turnLabel.textContent = msg;
}

function handleCellClick(event) {
  const cell = event.target;
  const value = cell.getAttribute("value");
  if (value === "null") {
    cell.textContent = currentPlayer;
    cell.setAttribute("value", currentPlayer);
    if (!checkWinner()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      defaultTurnLabel();
    }
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

document.body.appendChild(board);

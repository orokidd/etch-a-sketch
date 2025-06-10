const container = document.querySelector(".center-container");
const containerWidth = container.offsetWidth;
const initSquareSize = 12;
const btnSize = document.querySelector("#size-button");
const btnReset = document.querySelector("#reset-button");

function createGrid(gridSize) {
  container.innerHTML = "";

  for (let i = 1; i <= gridSize * gridSize; i++) {
    const squareBlack = document.createElement("div");
    squareBlack.classList.add("black");
    squareBlack.style.width = `${containerWidth / gridSize}px`;
    squareBlack.style.height = `${containerWidth / gridSize}px`;
    squareBlack.style.backgroundColor = "black";

    const squareColor = document.createElement("div");
    squareColor.classList.add("square");
    squareColor.style.width = `${containerWidth / gridSize}px`;
    squareColor.style.height = `${containerWidth / gridSize}px`;
    squareColor.style.backgroundColor = "white";

    squareBlack.appendChild(squareColor);
    container.appendChild(squareBlack);
  }
  hoverEffect();
}

function hoverEffect() {
  const squares = document.querySelectorAll(".square");
  let color;

  container.addEventListener("mouseenter", () => {
    color = getRandomRGB();
  });

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      if (square.style.backgroundColor === color) {
        let currentOpacity = parseFloat(square.style.opacity);
        square.style.opacity = `${currentOpacity - 0.1}`;
      } else {
        square.style.opacity = "1";
        square.style.backgroundColor = color;
      }
    });
  });
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function resetGrid() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "white"
    square.style.opacity = "1";
  })
}

btnSize.addEventListener("click", () => {
  let selectedGridSize = prompt("Enter grid size");

  if (selectedGridSize < 1 || selectedGridSize > 100) {
    alert("Try again!");
    return;
  }

  createGrid(selectedGridSize);
});

btnReset.addEventListener("click", resetGrid)

//   Initiate starting state
createGrid(initSquareSize);

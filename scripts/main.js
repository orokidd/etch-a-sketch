const container = document.querySelector(".center-container");
const containerWidth = container.offsetWidth;
const initSquareSize = 12;
let color = "#aed0b0";

const btnSize = document.querySelector("#size-button");
const btnReset = document.querySelector("#reset-button");
const btnColor = document.querySelector("#color-picker");

btnColor.addEventListener("input", (e) => {
  customColor(e.target.value);
});

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

function customColor(selectedColor) {
  color = selectedColor;
  console.log(color);
}

function hoverEffect() {
  const squares = document.querySelectorAll(".square");

  // container.addEventListener("mouseenter", () => {
  //   color = getRandomRGB();
  // });

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      darkeningEffect(square);
    });
  });
}

function darkeningEffect(square) {
  if (square.dataset.color === color) {
    let currentOpacity = parseFloat(square.style.opacity);
    square.style.opacity = `${currentOpacity - 0.1}`;
  } else {
    square.style.opacity = "1";
    square.style.backgroundColor = color;
    square.dataset.color = color;
  }
}

function randomColor() {}

function resetEffect() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.removeEventListener("click");
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
    square.style.backgroundColor = "#ffffff";
    square.dataset.color = "#ffffff"
    square.style.opacity = "1";
    
  });
}

btnSize.addEventListener("click", () => {
  let selectedGridSize = prompt("Enter grid size");

  if (selectedGridSize < 1 || selectedGridSize > 100) {
    alert("Try again!");
    return;
  }

  createGrid(selectedGridSize);
});

btnReset.addEventListener("click", resetGrid);

//   Initiate starting state
createGrid(initSquareSize);

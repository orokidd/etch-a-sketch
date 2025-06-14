const btnSize = document.querySelector("#size-button");
const btnReset = document.querySelector("#reset-button");
const btnColor = document.querySelector("#color-picker");
const btnRainbow = document.querySelector("#rainbow-button");
const btnEraser = document.querySelector("#eraser-button");
const btnBrush = document.querySelector("#brush-button");
const btnDarken = document.querySelector("#toggle-darken-button");

let color = "#aed0b0";
let stateDarkening = true;

function createGrid(gridSize) {
  const container = document.querySelector(".center-container");
  const containerWidth = container.offsetWidth;
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
}

function customColor(selectedColor) {
  color = selectedColor;
}

function hoverEffect() {
  resetEffect();
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", darkeningEffect);
  });
}

function darkeningEffect(event) {
  const square = event.target;
  if (square.dataset.color === color && stateDarkening) {
    let currentOpacity = parseFloat(square.style.opacity);
    square.style.opacity = `${currentOpacity - 0.1}`;
  } else {
    square.style.opacity = "1";
    square.style.backgroundColor = color;
    square.dataset.color = color;
  }
}

function toggleDarkeningEffect() {
  stateDarkening = !stateDarkening;
  toggleActiveButtonClass(btnDarken)
}

function toggleActiveButtonClass(button) {
  button.classList.toggle("active");
}

function resetEffect() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.removeEventListener("mouseenter", darkeningEffect);
  });

  squares.forEach((square) => {
    square.removeEventListener("mouseenter", rainbowEffect);
  });

  squares.forEach((square) => {
    square.removeEventListener("mouseenter", eraserEffect);
  });
}

function rainbowEffectListener() {
  resetEffect();
  
  const squares = document.querySelectorAll(".square");
  

  squares.forEach((square) => {
    square.addEventListener("mouseenter", rainbowEffect);
  });
}

function rainbowEffect(event) {
  const square = event.target;
  let rainbow = getRandomRGB();

  square.style.opacity = "1";
  square.style.backgroundColor = rainbow;
  square.dataset.color = rainbow;
}

function eraserListener() {
  resetEffect();
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", eraserEffect);
  });
}

function eraserListener() {
  resetEffect();
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", eraserEffect);
  });
}

function eraserEffect(event) {
  const square = event.target;

  square.style.opacity = "1";
  square.style.backgroundColor = "#ffffff";
  square.dataset.color = "#ffffff";
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
    square.dataset.color = "#ffffff";
    square.style.opacity = "1";
  });
}

btnColor.addEventListener("input", (e) => {
  customColor(e.target.value);
  hoverEffect();
});

btnBrush.addEventListener("click", hoverEffect);

btnRainbow.addEventListener("click", rainbowEffectListener);

btnEraser.addEventListener("click", eraserListener);

btnDarken.addEventListener("click", toggleDarkeningEffect);

btnSize.addEventListener("click", () => {
  let selectedGridSize = prompt("Enter grid size");

  if (selectedGridSize < 1 || selectedGridSize > 100) {
    alert("Try again!");
    return;
  }

  createGrid(selectedGridSize);
  hoverEffect();
});

btnReset.addEventListener("click", resetGrid);

const init = (() => {
  createGrid(12);
  hoverEffect();
})();

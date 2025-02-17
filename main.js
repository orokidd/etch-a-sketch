const container = document.querySelector(".center-container");
const containerWidth = container.offsetWidth;
const initSquareSize = 6;
const button = document.querySelector("button");
let color;

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

  container.addEventListener("mouseenter", () => {
    color = getRandomRGB();
  });

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      // square.style.backgroundColor = color;
      if (square.style.backgroundColor === color) {
        let currentOpacity = parseFloat(
          window.getComputedStyle(square).opacity
        );
        square.style.opacity = `${currentOpacity - 0.1}`;
      } else {
        square.style.opacity = "1";
        square.style.backgroundColor = color;
      }
    });
  });
}

button.addEventListener("click", () => {
    let userGridSize = prompt("Enter grid size");
  
    if (userGridSize < 1 || userGridSize > 100) {
      alert("Try again!");
      return;
    }
  
    createGrid(userGridSize);
  });
  
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(initSquareSize);

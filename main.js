const container = document.querySelector(".center-container");
const containerWidth = container.offsetWidth;
const squareSize = 6;
let color;

for (let i = 1; i <= squareSize * squareSize; i++) {
  const squareBlack = document.createElement("div");
  squareBlack.classList.add("black");
  squareBlack.style.width = `${containerWidth / squareSize}px`;
  squareBlack.style.height = `${containerWidth / squareSize}px`;
  squareBlack.style.backgroundColor = "black";

  const squareColor = document.createElement("div");
  squareColor.classList.add("square");
  squareColor.style.width = `${containerWidth / squareSize}px`;
  squareColor.style.height = `${containerWidth / squareSize}px`;
  squareColor.style.backgroundColor = "white";

  squareBlack.appendChild(squareColor);
  container.appendChild(squareBlack);
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

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

hoverEffect();

const container = document.querySelector(".center-container");
const containerWidth = container.offsetWidth;
const squareSize = 6;

for (let i = 1; i <= squareSize*squareSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    square.style.width = `${containerWidth/squareSize}px`
    square.style.height = `${containerWidth/squareSize}px`
    square.style.backgroundColor = "blue";

    container.appendChild(square);
}
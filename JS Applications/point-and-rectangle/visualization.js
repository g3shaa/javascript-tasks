const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rectangleXInput = document.getElementById("rectangle-x");
const rectangleYInput = document.getElementById("rectangle-y");
const rectangleWidthInput = document.getElementById("rectangle-width");
const rectangleHeightInput = document.getElementById("rectangle-height");
const pointXInput = document.getElementById("point-x");
const pointYInput = document.getElementById("point-y");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

let rectangleX = 0;
let rectangleY = 0;
let rectangleWidth = 100;
let rectangleHeight = 100;
let pointX = 50;
let pointY = 50;

submitButton.addEventListener("click", () => {
    rectangleX = parseFloat(rectangleXInput.value);
    rectangleY = parseFloat(rectangleYInput.value);
    rectangleWidth = parseFloat(rectangleWidthInput.value);
    rectangleHeight = parseFloat(rectangleHeightInput.value);
    pointX = parseFloat(pointXInput.value);
    pointY = parseFloat(pointYInput.value);
    draw();
});

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0, 0, 255, 0.2)";
    context.fillRect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);
    context.fillStyle = "red";
    context.beginPath();
    context.arc(pointX, pointY, 5, 0, 2 * Math.PI);
    context.fill();

    if (
        pointX >= rectangleX && pointX <= rectangleX + rectangleWidth &&
        pointY >= rectangleY && pointY <= rectangleY + rectangleHeight
    ) {
        if (
            pointX === rectangleX || pointX === rectangleX + rectangleWidth ||
            pointY === rectangleY || pointY === rectangleY + rectangleHeight
        ) {
            result.innerText = "BORDER";
            result.style.color = "black";
            result.style.backgroundColor = "#FDB813";
        } else {
            result.innerText = "INSIDE";
            result.style.color = "black";
            result.style.backgroundColor = "#FFC0CB";
        }
    } else {
        result.innerText = "OUTSIDE";
        result.style.color = "black";
        result.style.backgroundColor = "#F7464A";
    }

    document.getElementById("coordsPoint").innerHTML = `Point coords: (${pointX}, ${pointY})`; 
    document.getElementById("coordsRectangle").innerHTML = `Rectangle coords: (${rectangleX}, ${rectangleY})`;
    document.getElementById("WidthHeightRectangle").innerHTML = `Rectangle width and height: (${rectangleWidth} x ${rectangleHeight})`;
    
}


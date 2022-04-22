const inputValue = document.getElementById("board-size").value;
const box = document.querySelector("#color-palette").children;
// const pixel = document.getElementsByClassName('pixel');
const clickButton = document.querySelector("#generate-board");
const clear = document.querySelector("#clear-board");

function random() {
  const random = Math.floor(Math.random() * 256);
  return random;
}

for (let i = 0; i < box.length; i += 1) {
  if (i === 0) {
    box[i].style.backgroundColor = "black";
    box[i].className = "color selected";
  } else {
    box[i].style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  }
}

function pixelDefault() {
  for (let i = 0; i < 5; i += 1) {
    const section = document.getElementById("pixel-board");
    let divFather = document.createElement("div");
    divFather.className = "divFather";
    section.appendChild(divFather);
  }

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const divFather = document.getElementsByClassName("divFather")[j];
      let newDiv = document.createElement("div");
      newDiv.className = "pixel";
      divFather.appendChild(newDiv);
    }
  }
}

function addDvisFathers() {
  let inputValue = document.getElementById("board-size").value;

  if (inputValue === "") {
    alert("Board inválido!");
  }

  let pixelBoard = document.querySelector("#pixel-board");
  pixelBoard.innerHTML = null;

  if (inputValue < 5) {
    inputValue = 5;
    inputValue.innerHTML = "";
  } else if (inputValue > 50) {
    inputValue = 50;
    inputValue.innerHTML = "";
  }

  for (let i = 0; i < inputValue; i += 1) {
    const section = document.getElementById("pixel-board");
    let divFather = document.createElement("div");
    divFather.className = "divFather";
    section.appendChild(divFather);
  }

  for (let i = 0; i < inputValue; i += 1) {
    for (let j = 0; j < inputValue; j += 1) {
      const divFather = document.getElementById("pixel-board").children[j];
      let newDiv = document.createElement("div");
      newDiv.className = "pixel";
      divFather.appendChild(newDiv);
    }
  }
  clearInput();
}

function clearInput() {
  let inputClean = document.getElementById("board-size");
  inputClean.value = "";
}

function clearAllPixels() {
  let pixels = document.getElementsByClassName("pixel");
  let pixelBoard = document.getElementById("pixel-board");
  pixelBoard.style.backgroundColor = "#ffffff";
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "#ffffff";
  }
}

clickButton.addEventListener("click", addDvisFathers);
clear.addEventListener("click", clearAllPixels);

if (inputValue === "") {
  pixelDefault();
} else {
  addDvisFathers();
}

let pixel = document.getElementById("pixel-board");
pixel.addEventListener("click", pixelClicked);

// define a cor preta como default
function pixelClicked(event) {
  event.target.style.backgroundColor = "#000000";
}

// define a cor de acordo com a cor clicada na paleta
let palleteColor = document.getElementById("color-palette");
palleteColor.addEventListener("click", getColorFromPallete);

function getColorFromPallete(event) {
  let colorWhite = document.getElementById("pixel-board");
  let currentColor = event.target.style.backgroundColor;

  colorWhite.addEventListener("dblclick", colorWhiteF);

  let pixel = document.getElementById("pixel-board");
  pixel.addEventListener("click", pixelClicked);

  function pixelClicked(event) {
    event.target.style.backgroundColor = currentColor;
  }

  function colorWhiteF(event) {
    event.target.style.backgroundColor = "#ffffff";
  }
}

let classSelected = document.querySelector("#color-palette");
classSelected.addEventListener("click", setClassSelected);

function setClassSelected(event) {
  let classSelected = document.querySelector(".color.selected");
  classSelected.className = "color";

  if (event.target.classList[0] === "color") {
    event.target.className = "color selected";
  }
}

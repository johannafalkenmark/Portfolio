const myButton = document.getElementById("button-js");
const colorBox = document.getElementById("color-box-js");

let counter = 0;

function clickHandler() {
  counter++;
  colorBox.classList.toggle("green");
  colorBox.innerText = counter;
}

myButton.addEventListener("click", clickHandler);

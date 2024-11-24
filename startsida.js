const myButton=document.getElementById("happening-js");

let counter = 0;

function clickHandler() {
counter++;
console.log(counter);
}


myButton.addEventListener("click", clickHandler);
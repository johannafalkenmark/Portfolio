const sprayCan = document.getElementById("sprayCan-js");
const body = document.getElementById("body-js");

// Alt 1
//const column1 = document.getElementsByClassName("column-1-js");
//console.log(column1[0]);

// Alt 2
const column1 = document.querySelector(".column-1-js");
console.log(column1);

// Alt 3

//const column1=document.getElementById("column-1").className;

let counter = 0;

function clickHandler() {
  counter++;
  console.log(counter);

  body.classList.toggle("beige");
}

sprayCan.addEventListener("click", clickHandler);

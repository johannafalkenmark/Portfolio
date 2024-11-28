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

async function getWeather() {
  const response = await fetch(
    "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json"
  );

  console.log(response);

  response
    .json()
    .then((data) => {
      console.log(data.timeSeries);
    })
    .catch((e) => console.error(e));
}

getWeather();

let counter = 0;

function clickHandler() {
  counter++;
  console.log(counter);

  body.classList.toggle("beige");
}

sprayCan.addEventListener("click", clickHandler);

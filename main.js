getData()

let renew = document.querySelector("main > button");
let idSpan = document.querySelector(".title span");
let advicePar = document.querySelector(".advice");
let lineHeight = "144px";


renew.addEventListener("click", anima); // anima = getData

async function getData() {
  let fetsh = await fetch(
    `https://api.adviceslip.com/advice/${Math.ceil(Math.random() * 224)}`
  );
  let dataJson = await fetsh.json();
  updateAdvice(dataJson.slip.id, dataJson.slip.advice);
}

function updateAdvice(id, advice) {
  idSpan.innerHTML = `#${id}`;
  advicePar.innerHTML = `“${advice}”`;
}


// change divider image

function myFunction(x) {
  if (x.matches) {
    document.images[0].src = "images/pattern-divider-mobile.svg";
    lineHeight = "108px";
  } else {
    document.images[0].src = "images/pattern-divider-desktop.svg";
    lineHeight = "144px";
  }
}

let x = window.matchMedia("(max-width: 540px)");
myFunction(x);
x.addEventListener("change", myFunction);

//animation

function anima() {
  renew.setAttribute("disabled", "");
  let ani = setInterval(getData, 50);
  advicePar.style.height = lineHeight;
  setTimeout(() => {
    clearInterval(ani);
    renew.removeAttribute("disabled");
    advicePar.style.height = "fit-content";
  }, 600);
}
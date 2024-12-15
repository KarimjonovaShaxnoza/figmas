function darkMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";

  let text = document.querySelector("h1");
  text.style.color = "white";
}

function lightMode() {
  console.log("lightMode");
  let body = document.querySelector("body");
  body.style.background = "white";

  let text = document.querySelector("h1");
  text.style.color = "black";
}

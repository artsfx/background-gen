"strict use";

var color1Elem = document.getElementById("color1");
var color2Elem = document.getElementById("color2");
var body = document.getElementById("gradient");


function setColor() {
body.style.background = "linear-gradient(to right,"+ color1Elem.value+","+ color2Elem.value+")";
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);

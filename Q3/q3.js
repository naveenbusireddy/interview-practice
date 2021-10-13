var text = document.getElementsByTagName("#q3-input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");


btn1.addEventListener("click", changeTag);

var textSize = 16;

function changeTag() {
    textSize = Number(textSize)*2;
    text.style.textSize = textSize+'px';
    // <h1>{text.style}</h1>;
}
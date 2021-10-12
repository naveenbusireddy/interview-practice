var text = document.getElementsByTagName("#q3-input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");

var textType = 0;
btn1.addEventListener("click", changeTag);

function changeTag() {
    console.log('click');
    // textType = 1;
    text.style.getElementsByTagName = 'h1';
    // <h1>{text.style}</h1>;
}
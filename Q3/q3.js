var text = document.getElementById("#q3-input");
var btn1 = document.querySelector("#h1");
var btn2 = document.querySelector("#h2");
var btn3 = document.querySelector("#h3");

var textThree = text.value;
btn1.addEventListener("click", () => {
    console.log('click')
    textThree.style.textDecoration = h1;
})
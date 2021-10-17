var input = document.getElementById("q3-input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var output = document.querySelector("#output");
var output1 = document.querySelector("#output1");
var output2 = document.querySelector("#output2");

// text.addEventListener("input", () => {
//     output.innerText = text.value;
// })

btn1.addEventListener("click", () => {

    var h1 = document.createElement("h1");
    output.parentNode.replaceChild(h1, output);
    h1.innerHTML = input.innerHTML;
    
});

btn2.addEventListener("click", () => {

    var h2 = document.createElement("h2");
    output1.parentNode.replaceChild(h2, output1);
    h2.innerHTML = input.innerHTML;
});

btn3.addEventListener("click", () => {
    var h3 = document.createElement("h3");
    output2.parentNode.replaceChild(h3, output2);
    h3.innerHTML = input.innerHTML;
});
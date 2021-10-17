var text = document.querySelector("#q3-input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var output = document.querySelector("#output");

text.addEventListener("input", () => {
    output.innerText = text.value;
})

btn1.addEventListener("click", () => {

    var h1 = document.createElement("h1");
    output.parentNode.replaceChild(h1, output);
    h1.innerHTML = output.innerHTML;
    // document.createElement("h1").innerHTML = text.innerHTML;
});

// btn2.addEventListener("click", () => {

//     var h2 = document.createElement("h2");
//     text.parentNode.replaceChild(h2, text);
//     h2.innerHTML = text.innerHTML;
// });

btn3.addEventListener("click", () => {
    var h3 = document.createElement("h3");
    output.parentElement.appendChild(h3, output);
    h3.innerHTML = output.innerHTML;
});
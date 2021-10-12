var input = document.querySelector("#input-text");
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");
var output = document.querySelector("#output");

increase.addEventListener("click", big);
input.addEventListener("input", display);
decrease.addEventListener("click", small);

var fontSize = 16;
output.style.fontSize = '${fontSize}px';

function display() {
    output.innerText = input.value;
}

function big() {
    console.log("hellow")
    fontSize += 2;
    output.style.fontSize = '${fontSize}px';
}

function small() {
    console.log("hellow")
    fontSize -= 2;
    output.style.fontSize = '${fontSize}px';
}



// increase.addEventListener("click", () => {
//     input.style.fontSize = input + '14px';
// })
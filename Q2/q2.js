var input = document.querySelector("#input-text");
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");

increase.addEventListener("click", big);
decrease.addEventListener("click", small);

var textSize = 16;

function big() {
    textSize += 2;
    input.style.fontSize = textSize+'px';
}

function small() {
    textSize -= 2;
    input.style.fontSize = textSize+'px';
}



// increase.addEventListener("click", () => {
//     input.style.fontSize = input + '14px';
// })
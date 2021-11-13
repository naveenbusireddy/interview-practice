var input = document.querySelector("#input-text");
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");

increase.addEventListener("click", increaseTextSize);
decrease.addEventListener("click", decreaseTextSize);

// var textSize = Number(input.style.fontSize);
var textSize = parseInt(window.getComputedStyle(input).fontSize);

console.log(textSize);

function increaseTextSize() {
    textSize += 2;
    input.style.fontSize = textSize+'px';
}

function decreaseTextSize() {
    textSize -= 2;
    input.style.fontSize = textSize+'px';
}



// increase.addEventListener("click", () => {
//     input.style.fontSize = input + '14px';
// })
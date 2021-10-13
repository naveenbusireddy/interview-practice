const input = document.querySelector("#input");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blueBtn = document.querySelector("#blue");

redBtn.addEventListener("click", () => {
    input.style.color = 'red';
});

greenBtn.addEventListener("click", () => {
    input.style.color = 'green';
});

blueBtn.addEventListener("click", () => {
    input.style.color = 'blue';
});
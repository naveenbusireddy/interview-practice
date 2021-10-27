// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.
const input = document.querySelector("#input-text");
// const h1Btn = document.querySelector("#h1-button");
// const h2Btn = document.querySelector("#h2-button");
// const h3Btn = document.querySelector("#h3-button");
const Btn = document.querySelectorAll("button");

const inputValue = input.innerText;

// array1.forEach(element => console.log(element));
function clickHandler() {
    if(this.innerText === "H1")
    {
        input.innerHTML = `<h1>${inputValue}</h1>`
    }
    else if(this.innerText === "H2") {
        input.innerHTML = `<h2>${inputValue}</h2>`
    }
    else if(this.innerText === "H3") {
        input.innerHTML = `<h3>${inputValue}</h3>`
    }
}

Btn.forEach(btn => {
    btn.addEventListener("click", clickHandler)
})

clickHandler();

// h1Btn.addEventListener("click", () => {
    
//     input.innerHTML = `<h1>${inputValue}</h1>`
    
// })

// h2Btn.addEventListener("click", () => {
    
//     input.innerHTML = `<h2>${inputValue}</h2>`
// })

// h3Btn.addEventListener("click", () => {
    
//     input.innerHTML = `<h3>${inputValue}</h3>`
// })
var input = document.getElementById("q3-input");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var output = document.querySelector("#output");

// text.addEventListener("input", () => {
//     output.innerText = text.value;
// })

btn1.addEventListener("click", () => {
    input.innerHTML = `<h1>${input.innerText}</h1>`;
    /* var h1 = document.createElement("h1");
    output.parentNode.append(h1, output);    
    output.replaceWith(h1); */
});

btn2.addEventListener("click", () => {
    input.innerHTML = `<h2>${input.innerText}</h2>`;

    /* var h2 = document.createElement("h2");
    output.parentNode.append(h2, output);
    h2.innerHTML = input.innerHTML; */
});

btn3.addEventListener("click", () => {
    input.innerHTML = `<h3>${input.innerText}</h3>`;

    /* var h3 = document.createElement("h3");    
    output.parentNode.append(h3, output);
    h3.innerHTML = input.innerHTML; */
});
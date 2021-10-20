const input = document.getElementById("password");
const btn = document.getElementById("button");
const output = document.querySelector("#output");

btn.disabled = true;

input.addEventListener("input", () => {
    let value = input.value;
    if(value.length < 8)
    {
        btn.disabled = true;
        input.style.backgroundColor = "gray";
    } 
    else 
    {
        btn.disabled = false;
        input.style.backgroundColor = "lightgreen";

    }
})

btn.addEventListener("click", () => {
    let value = input.value;
    if(value.length < 10) {
        output.innerText = "Error";
        output.style.color = "red";
    } else {
        output.innerText = "Success";
        output.style.color = "green";

    }
})


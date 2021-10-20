const input = document.getElementById("password");
const btn = document.getElementById("button");

btn.disabled = true;

input.addEventListener("input", () => {
    // let inputLength = input.value
    if(input.value.length < 8) 
    {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
})


// btn.addEventListener("click", () => {
    
//     console.log("clicked");
// })
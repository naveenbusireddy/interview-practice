const text = document.getElementById("loaded");
const button = document.querySelector("#submit");

button.addEventListener("click", () => {

    // text.style.visibility = "hidden";

    if(text.style.display === "none")
    {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

})
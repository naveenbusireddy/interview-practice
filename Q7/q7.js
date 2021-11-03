var input = document.querySelector("#input-data");
var btn = document.querySelector("#submit");
var output = document.querySelector("#output");

const URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function fetchURL() {
    // console.log("hello");  
    var text = input.value;
    var newURL = URL+ "?text=" +text;
     
    fetch(newURL)
    .then(Response => Response.json())
    // .then(data => output.innerHTML = data)

    .then(data => {
        var translatedText = data.contents.translated;
        output.innerHTML = translatedText;
    } )

    // console.log("hello");

}
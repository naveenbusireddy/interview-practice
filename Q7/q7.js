var input = document.querySelector("#input-data");
var btn = document.querySelector("#submit");

const URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function fetchURL() {
    // console.log("hello");
    var text = input.value;
    var newURL = URL+"/?" +text;
    fetch(newURL)
    .then(Response => Response.text())
    .then(data => console.log(data));

}
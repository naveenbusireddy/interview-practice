var apiBtn = document.querySelector("#api");
var output = document.querySelector("#out-put");

const url = "https://unitube-server.herokuapp.com/playlists";

function clickHandller() {

    fetch(url)
    .then(Response => {
        if(Response.status === 401)
        {
            output.innerHTML = Response.statusText
        }  
    }
    )

}





apiBtn.addEventListener("click", clickHandller)

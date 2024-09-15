let url = "https://coffee.alexflipnote.dev/random.json"

let container = document.getElementById("container")

function coffee () {
fetch(url)
    .then(res => res.json())
    .then(data => {
        container.innerHTML = '';
        console.log(data);
            let img = document.createElement("img");
            img.src = data.file;
            container.appendChild(img);
        });
}
setInterval(coffee, 4000);


    
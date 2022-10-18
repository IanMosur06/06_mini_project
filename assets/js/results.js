var imgEl = document.getElementById('game-img');
var descriptionEl = document.getElementById('game-description')
var genreEL;

function renderItems() {
    var img = localStorage.getItem('game-img');
    var description = localStorage.getItem('game-description');
    //platform
    //genre


    imgEl.setAttribute("src", img)
    descriptionEl.textContent = description;
    var platforms = localStorage.getItem("platforms").split(",")
    for (let index = 0; index < platforms.length; index++) {
        const element = platforms[index];
        const p = document.createElement("p")
        p.textContent = element
        descriptionEl.appendChild(p)

    }
}
renderItems();
getYoutubeId();
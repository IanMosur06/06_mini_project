// DOM references
var imgEl = document.getElementById('game-img');
var descriptionEl = document.getElementById('game-description')

// function to render data onto the page
function renderItems() {
    var img = localStorage.getItem('game-img');
    var description = localStorage.getItem('game-description');
    var platforms = localStorage.getItem("platforms").split('[]');
    var genres = localStorage.getItem("genres").split("[]");

    imgEl.setAttribute("src", img)
    descriptionEl.textContent = "Description: " + description;
    for (let index = 0; index < platforms.length; index++) {
        const element = platforms[index];
        const p = document.createElement("p")
        p.textContent = "Platforms: " + element;
        descriptionEl.appendChild(p)
    }
    for (let index = 0; index < genres.length; index++) {
        const element = genres[index];
        const p = document.createElement("p")
        p.textContent = "Genres: " + element;
        descriptionEl.appendChild(p)
    }
}

// calls function above and fetch youtube api from script.js
renderItems();
getYoutubeId();
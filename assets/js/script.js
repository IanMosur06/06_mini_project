// global variables
var queryUrl = 'https://rawg-video-games-database.p.rapidapi.com/games' + apiKey

var apiKey = '?key=9c9c4ff2f104433ba2fee0058fd0a4bd'
// RAWG API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

  fetch('https://rawg-video-games-database.p.rapidapi.com/games/4291?key=9c9c4ff2f104433ba2fee0058fd0a4bd',options)
	.then(response => response.json())
  .then(response => console.log(response))
	.catch(err => console.error(err));

//   // Youtube API
// const youtube = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };
  
// fetch('https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US', youtube)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));z


// DOM references
var gameInfoEl = document.getElementById('game-info');
var InputEl = document.querySelector('.input');
var imgEl = document.querySelector('.game-img');

// function to display the searched game information
function renderSearchResults(gameName, data) {

gameInfoEl.innerHTML = '';
gameInfoEl.setAttribute('class', 'container')

gameName = gameName.charAt(0).toUpperCase() + gameName.slice(1);

// var genre = data.results.;

};




// user input function
function handleGameSearch() {

    // dont continue if input is empty
    if (!inputEl.value) {
        alert("Please Enter A Valid Game!");
        return;
    }
    // if input full call fetch coords
    var search = inputEl.value;
    fetchCoords(search);
    inputEl.value = "";
}


function fetchGameInfo(genre, year, game) {

	var gameGenre = genre;
	var gameYear = year;
	var gameName = game;

	var apiUrl = `https://rawg-video-games-database.p.rapidapi.com/games=${gameGenre}${apiKey}`

}


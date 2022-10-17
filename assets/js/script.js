// global variables

var localStorage = {
platformArray: [],
genreArray: [],
rating: [],
};

// rawg api key
var apiKey = '?key=9c9c4ff2f104433ba2fee0058fd0a4bd';

// RAWG API
const options = {
  method: 'GET',
  // headers: {
  //   'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
  //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  // }
};

// Youtube API
const youtube = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// DOM references
var gameInfoEl = document.getElementById('game-info');
var searchBtn = document.querySelector ('.button')
var imgEl = document.querySelector('.game-img');


function appendToHistory (gameName,data) {
  var platform = data.platform;
  console.log(platform)
}







// fetch game title and details
async function fetchGameTitle(search) {

   await fetch(`https://api.rawg.io/api/games/${search}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
    .then(response => response.json())
    .then(response => {
      if (response.redirect) {
        var gameName = response.slug
        fetchGameTitle (gameName)       
      }
      console.log(search)
      console.log(response)
    })
    .catch(err => console.error(err));
}

searchBtn.addEventListener('click', function () {
  var gameSearchTest = document.getElementById('input').value
  fetchGameTitle(gameSearchTest);
  console.log(gameSearchTest)})



// localStorage.setItem("game-data", JSON.stringify(localStorage));

// if(localStorage.getItem("game-data") !== null){
//   var searchedGamed = JSON.parse(localStorage.getItem("game-data"));
// }else {
//   console.log("error, Nothing in storage");
// }

// // user input function
// function handleGameSearch() {


//   // if input full call fetch coords
//   var search = inputEl.value;
//   fetchgame(search);
//   inputEl.value = "";
// }




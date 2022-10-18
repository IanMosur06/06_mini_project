// global variables
var storage = {
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
fetch('https://youtube138.p.rapidapi.com/channel/details/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// DOM references
var searchBtn = document.querySelector('.custom-button')

function appendToLocalStorage(data1, data2) {
  console.log("data1", data1)
  console.log("data2", data2)
  for (let index = 0; index < data1.length; index++) {
    var platformData = data1[index].platform.name;
    console.log(platformData);
    storage.platformArray.push(platformData);
  }
  for (let i = 0; i < data2.genres.length; i++ ) {
    var genreData = data2.genres[i].name;
    storage.genreArray.push(genreData);
  }
  var img = data2.background_image;
  var description = data2.description_raw;
  localStorage.setItem('game-img', img);
  localStorage.setItem('game-description', description);
  localStorage.setItem('platforms', JSON.stringify(storage.platformArray));
  localStorage.setItem('genres', JSON.stringify(storage.genreArray));
}


async function getGameFromSlug(slug) { 
  console.log(slug)
  await fetch(`https://api.rawg.io/api/games/${slug}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
    .then(response => response.json())
  
    .then(response => { 
      appendToLocalStorage(response.parent_platforms, response);
    })

    .catch(err => console.error(err));
}


// fetch game title and details
async function fetchGameTitle(search) {
console.log(search)
  await fetch(`https://api.rawg.io/api/games/${search}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
    .then(response => response.json())
    .then(response => {
      if (response.redirect) {
        console.log("redirecting...")
        var slug = response.slug
        getGameFromSlug(slug)

      }else{
        console.log("no redirect")

        appendToLocalStorage(response.parent_platforms, response);
      }
    })
    .catch(err => console.error(err));
}

function handeSearchFormSubmit(event) {
  event.preventDefault();
  var gameSearch = document.getElementById('search').value;
  if (!gameSearch) {
    alert("Please enter a game title!");
    return;
  } else {
    fetchGameTitle(gameSearch);
  }
  window.location.href="results.html"
}


searchBtn.addEventListener('click', handeSearchFormSubmit)

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




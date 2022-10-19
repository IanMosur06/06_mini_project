// global variables
var storage = {
  platformArray: [],
  genreArray: [],
  rating: [],
};

// DOM reference
var searchBtn = document.querySelector('.custom-button')

// function to store data from api inside local storage
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
  localStorage.setItem('platforms',storage.platformArray);
  localStorage.setItem('genres',storage.genreArray);
  window.location.href="results.html";
}

// RAWG API
const options = {
  method: 'GET',
};

// function to fetch game title and details
async function fetchGameTitle(search) {
console.log(search)
  await fetch(`https://api.rawg.io/api/games/${search}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
    .then(response => response.json())
    .then(response => {
      if (response.redirect) {
        console.log("redirecting...");
        var slug = response.slug;
        getGameFromSlug(slug);
      }else{
        console.log("no redirect");
        appendToLocalStorage(response.parent_platforms, response);
      }
    })
  .catch(err => console.error(err));
}

// function to fetch game title and details using slug
async function getGameFromSlug(slug) { 
  console.log(slug)
  await fetch(`https://api.rawg.io/api/games/${slug}?key=9c9c4ff2f104433ba2fee0058fd0a4bd`, options)
    .then(response => response.json())
  
    .then(response => { 
      appendToLocalStorage(response.parent_platforms, response);
    })

    .catch(err => console.error(err));
}

// Youtube API
const youtube = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '39cd710cfbmsh9cc223551facc72p1446a3jsn33a268761098',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// function to fetch youtube video link
async function getYoutubeId () {
 var getGameName = localStorage.getItem("gameSearch");
 console.log(getGameName);
  await fetch(`https://youtube138.p.rapidapi.com/search/?q=${getGameName}&hl=en&gl=US`, youtube)
	.then(response => response.json())
	.then(response => {
       var getID = response.contents[0].video.videoId;
       console.log(getID);
       var videoPlayer = document.getElementById('player');
       videoPlayer.setAttribute("src",`https://www.youtube.com/embed/${getID}`);
  })
	.catch(err => console.error(err))
}

//function to handle form submit
function handleSearchFormSubmit(event) {
  event.preventDefault();
  var userGameSearch = document.getElementById('search').value;
  var gameSearch = userGameSearch.replace(/\s+/g, '-');
  if (!gameSearch) {
    //alert("Please enter a game title!");
    return;
  } else {
    fetchGameTitle(gameSearch);
    getYoutubeId(gameSearch);
    localStorage.setItem("gameSearch",gameSearch);
  }
}

// event listener to listen for a "click" on search button
searchBtn.addEventListener('click', handleSearchFormSubmit);

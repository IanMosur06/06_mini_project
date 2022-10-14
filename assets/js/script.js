// RAWG API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=9c9c4ff2f104433ba2fee0058fd0a4bd', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// Youtube API
  const youtube = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4185a86540msh55a8448ac6e5678p149c46jsna834019ba73d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  fetch('https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US', youtube)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));











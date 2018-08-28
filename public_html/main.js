function findMovie() {
    let movieName = document.getElementById("movie").value;
    let movieDetails = document.querySelector("#details");
        
    const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e6418ebb&t=";
    const FETCH_URL = BASE_URL + movieName;
              
    fetch(FETCH_URL, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => movieDetails.innerHTML = 
        `<div class="card col-md-8 offset-md-2">
            <div class="row">
                <img src=${json.Poster} class="card-img col-md-6"/>
                <div class="col-md-6">
                    <h5 class="card-title"><span class="btn btn-outline-light" onclick="showPlot('${json.imdbID}');">${json.Title}</span></h5>
                    <div id="card-right">
                        <ul class="list-group list-group-flush" id="card-list">
                            <li class="list-group-item">${json.Year}</li>
                            <li class="list-group-item">${json.Genre}</li>
                            <li class="list-group-item">${json.Actors}</li>
                            <li class="list-group-item">${json.Director}</li>
                            <li class="list-group-item">${json.Released}</li>
                            <li class="list-group-item">${json.Runtime}</li>
                            <li class="list-group-item">${json.imdbRating} <i class="far fa-star"></i></li>
                        </ul>
                    <div>
                </div>
            </div>
        </div>`   
    );          
}

function showPlot(id) {
    document.getElementById("card-list").style.display = "none";
    let cardContent = document.getElementById("card-right");
    const FETCH_URL = `http://www.omdbapi.com/?i=${id}&apikey=e6418ebb&plot=full`;
    fetch(FETCH_URL, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => cardContent.innerHTML = `
        <p>${json.Plot}</p>
    `);    
}

 function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('videoPlayer', {
    videoId: 'puLV_-5sp6I', // YouTube Video ID
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      },
      onStateChange: 
        function(e){
            if (e.data === YT.PlayerState.ENDED) {
                player.playVideo(); 
            }
        }
    }
  });
 }
// read and set any environment variables with the dotenv package:
require("dotenv").config();

// code to import keys.js and store in variable
var keys = require("./keys.js"); 

// NPM package
var Spotify = require("node-spotify-api");
// Initialize Spotify
var spotify = new Spotify(keys.spotify);

// Require AXIOS
var axios = require('axios');

// Require Moment
var moment = require('moment');
var fs = require('fs');
var query = process.argv[3];

// Take User command and input
var option = process.argv[2];


switch (option) {
  case "movie-this":
      movieThis(query);
      break;
  case "spotify-this-song":
      spotifyCall(query);
      break;
  case "concert-this":
      concertThis(query);
      break;
  default:
      // 1- read file
      //do-what-it-says
  // syntax 'node liri.js do-what-it-says'
      fs.readFile("random.txt", "utf8", function (error, data) {
          // 2-retrieve content & parse string
          var data = data.split(",");
          var thatWay = data[1];
          if (error) {
              return console.log(error);
          }
          // 3-call function 
          spotifyCall(thatWay);
      })

}

// FUNCTIONS

//concert-this
function concertThis(artist) {
  //command syntax 'node liri.js concert-this <artist/band name here>''
  var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(bandsQueryUrl).then(
    function (response) {
        console.log("_Upcoming Events_");
        console.log("Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.country + "\nDate: " + response.data[0].datatime + "\nExcellent taste, User!");
    });
}

//spotify-this-song
  // syntax 'node liri.js spotify-this-song '<song name here>''
  function spotifyCall(songName) {
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n_Track Info_" + "\nArtist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + "\nLink: " + data.tracks.items[0].external_urls.spotify + "\nAlbum: " + data.tracks.items[0].album.name + "\n" + "\nLIRI loves this track!")
    });
}

//movie-this
  // syntax 'node liri.js movie-this '<movie name here>''
function movieThis(movieName) {
    if (!movieName) {
        movieName = "Mr. Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // Creating a request with axios to the queryUrl
    axios.get(queryUrl).then(
        function (response) {
            if (!movieName) {
                movieName = "Mr. Nobody";
            }// console.log(response.data);
            // Data of Movie
            console.log("\n_Movie Info_" + "\nTitle: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nRating: " + response.data.Rated + "\nRelease Country: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\n" + "\nLIRI Query: Has user seen this yet?");


        }
    );
}
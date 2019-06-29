// read and set any environment variables with the dotenv package:
require("dotenv").config();

// code to import keys.js and store in variable
const keys = require("./keys.js"); 

// Initialize Spotify
const Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Require AXIOS
const axios = require('axios');

// Require Moment
const moment = require('moment'); 

// Require file systems
var fs = require('fs');

// Take User command and input
const [, , command, ...searchInput] = process.argv[2];

// switchboard for commands
switch (command){
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis(userQuery);
        break;
}
//==========================================
//Make it so liri.js can take in one of the following commands:

//concert-this
function concertThis() {
  //command syntax 'node liri.js concert-this <artist/band name here>''
  console.log("\n------\n\nSearching for..${userQuery}'s next show...");
  searchItem = searchInput.join('')
    // console.log(searchItem)
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(artist => {
            for (let i = 0; i < artist.data.length; i++) {
                let concertDateTime = artist.data[i].datetime
                let concertDate = concertDateTime.slice(0, 10)
                console.log(`
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Result ${i+1} of ${artist.data.length}
                Name of Venue: ${artist.data[i].venue.name}
                City: ${artist.data[i].venue.city}
                Date: ${concertDate}
                `)
            }
        })
};

//spotify-this-song
  // syntax 'node liri.js spotify-this-song '<song name here>''
function spotifyThis() {
  searchItem = searchInput.join(' ')
  console.log(searchItem)
  spotify.search({ type: 'track', query: `${searchItem}` }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
      console.log(`
      ~~~~~~~~~~
      Artist(s): ${data.tracks.items[0].artists[i].name}`)
      }
      console.log(`
      Song Name: ${data.tracks.items[0].name}
      Preview: ${data.tracks.items[0].preview_url}
      Album: ${data.tracks.items[0].album.name}
      ~~~~~~~~~~
      `)
  //   console.log(data); 
    });
};

//movie-this
  // syntax 'node liri.js movie-this '<movie name here>''
function movieThis() {

  };

//do-what-it-says
  // syntax 'node liri.js do-what-it-says'
function doThis(){

};
  
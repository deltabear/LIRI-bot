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
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

function userCommand(userInput, userQuery) {
  // switchboard for commands
  switch (command){
    case "concert-this":
        concertThis();
        break;
    case "spotify-this":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-this":
        doThis(userQuery);
        break;
  }
}
userCommand(userInput, userQuery);
//Make it so liri.js can take in one of the following commands:

//concert-this
function concertThis() {
  //command syntax 'node liri.js concert-this <artist/band name here>''
  console.log(`\n------\n\nSEARCHING FOR...${userQuery}'s next show...`);

};

//spotify-this-song
  // syntax 'node liri.js spotify-this-song '<song name here>''
function spotifyThis() {

};

//movie-this
  // syntax 'node liri.js movie-this '<movie name here>''
function movieThis() {

  };

//do-what-it-says
  // syntax 'node liri.js do-what-it-says'
function doThis(){

};
  
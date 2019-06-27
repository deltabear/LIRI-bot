//read and set any environment variables with the dotenv package:
require("dotenv").config();

// requiring different packages
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require('axios');
var moment = require('moment');
//should be able to access keys by: 
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];

//Make it so liri.js can take in one of the following commands:

//concert-this
  //command syntax 'node liri.js concert-this <artist/band name here>''


//spotify-this-song
  // syntax 'node liri.js spotify-this-song '<song name here>''

//movie-this
  // syntax 'node liri.js movie-this '<movie name here>''

//do-what-it-says
  // syntax 'node liri.js do-what-it-says'

  
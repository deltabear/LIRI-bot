//read and set any environment variables with the dotenv package:
require("dotenv").config();

// requiring different packages
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require('axios');
const moment = require('moment');
//should be able to access keys by: 
const spotify = new Spotify(keys.spotify);

//Make it so liri.js can take in one of the following commands:

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says


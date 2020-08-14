var SpotifyWebApi = require('spotify-web-api-node');
const dotenv = require('dotenv').config()

var clientId = process.env.CLIENT_ID,
  clientSecret = process.env.CLIENT_SECRET;

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
  });
  
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      // console.log('The access token expires in ' + data.body['expires_in']);
      // console.log('The access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);

  

      spotifyApi.searchAlbums('Pixies Surfer Rosa', { limit : 1, offset : 1 })
      .then(function(data) {
        console.log(data.body.albums.items.external_urls);
       
      }, function(err) {
        console.error(err);
      });
    

    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );



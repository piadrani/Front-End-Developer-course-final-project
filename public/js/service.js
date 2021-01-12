let SpotifyWebApi = require("spotify-web-api-node");

// Credentials (optional)
let spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "http://www.example.com/callback",
});

// Token (general)
spotifyApi.setAccessToken(
  'BQCEO8ITcbQIQx9D--lloNLEjHYWmrbah5x1KWFXlgAE96JhxqUgzBkyB9xr5-TCtbNwnEp8pLrrMGDuSKD7sq1aY2ZV-5OkD7ms7qbLZaq6ENUPA4dOEtA0RQxAEDHf_3a8Tu-cQAYd'
);

// Main function
function getSong(songName) {
  let result = {};

  if (songName) {
    spotifyApi.searchTracks(songName).then(
      function (data) {
        const { name, artists, album, preview_url } = data.body.tracks.items[0];

        result.songName = name;
        result.artists = artists[0].name;
        result.preview = preview_url;
        result.image = album.images[0].url;
      },
      function (err) {
        console.error(err);
      }
    );
    
    return result;  
  }

  
}

module.exports = getSong
let SpotifyWebApi = require("spotify-web-api-node");

// Credentials
let credentials = {
  clientId: "d9892d790caa44fcb9280444fd5e3d7b",
  clientSecret: "432d7cb2f30d48568626d244d1ffc198",
  redirectUri: "http://localhost:8888/callback",
};

let spotifyApi = new SpotifyWebApi(credentials);

// We're hardcoding the token. It should be refreshed, but it will require an authentication in our web
spotifyApi.setAccessToken(
  "BQAYhRHheKCJKOBWGkV4Tr1wYD4u1JcBgvx2MwCDC2tmoaMRfGRYzh76C50igYrk0RqQIRYc7OAVI7rtmIMAExGdJ6_2Jta6d0ORtNWElt-NYXF8fXsqq7ljK8kF_sTcFH4oPfQlApMO"
);

// Main function
async function getSongs(songName) {
  let response = await spotifyApi.searchTracks(songName).then(
    (data) => {
      return data;
    },
    function (err) {
      console.error(err);
    }
  );

  const results = await response.body.tracks.items;

  const list = await [];

  for (index in results) {
    const { name, artists, album, preview_url } = await results[index];

    const result = {
      songName: name,
      artist: artists[0].name,
      preview: preview_url,
      image: album.images[0].url,
    };

    list.push(result);
  }

  return list;
}
module.exports = { getSongs: getSongs };

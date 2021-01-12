/*const request = require('postman-request');
let spotifyWebApi = require('spotify-web-api-node');
const authorizationCode = '<insert authorization code>';

const spotifyApi = new spotifyWebApi ({
    clientId: 'd9892d790caa44fcb9280444fd5e3d7b',
    clientSecret: '432d7cb2f30d48568626d244d1ffc198',
    redirectUri: 'https://localhost:3000/callback'
 });*/


/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
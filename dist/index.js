"use strict";

/*import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const sum = _.sum(array);

console.log('The sum of the array is: ${sum}');
*/
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.end("Hello World!");
});
var port = 8090;
server.listen(port);
console.log("Server running at http://localhost:%d", port);

var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('test', {'index': ['index.html']});
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
})
server.listen(process.env.PORT || 3000);
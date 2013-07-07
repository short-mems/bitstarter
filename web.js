var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var fs_ga = require('fs');
  response.send(fs.readFileSync('index.html').toString()+fs_ga.readFileSync('ga.js').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

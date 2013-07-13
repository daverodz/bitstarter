var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(function(){ 
  var buffer = Buffer(function(){
               return fs.readFileSync('index.html');
               },"utf-8");
  return buffer.toString();
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

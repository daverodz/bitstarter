var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(function(){ 
  var buffer = Buffer(400);
  buffer.write(fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}),"utf-8");
  return buffer.toString("utf8");
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

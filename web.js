var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(function(){ 
  var buffer = new Buffer(fs.readFileSync('./index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}),"utf-8");
  console.log("Buffer is:"+buffer.toString('utf-8'));
  return buffer.toString("utf-8");
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

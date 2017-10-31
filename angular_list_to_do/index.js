var express = require('express');
var app = express();
var server = require('http').createServer(app);
var request = require('request');


const PORT = 8080;

server.listen(process.env.PORT || PORT, function(){
    console.log("Example app listening on port " + PORT +"\n");
  });
  
  app.use(express.static('public'));
  
  
  // GET request
  app.get('/', function(req, res){
      res.redirect('index.html');
  });
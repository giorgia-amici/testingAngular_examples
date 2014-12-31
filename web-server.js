var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')
var fs = require('fs')
var url = require('url')
// var events = require('events')
var bodyParser = require('body-parser')
// var mkdirp = require('mkdirp');




app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(request, response){
  response.render('index')
});

app.get('/NewParty', function(request, response){
  response.render('NewParty')
});


server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
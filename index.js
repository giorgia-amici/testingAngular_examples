var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/partyapp');
var db = mongoose.connection;
mongoose.set('debug', true);
var Party = require('./models/Party');
var party;



app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function(request, response){
  response.render('index')
});

app.get('/NewParty', function(request, response){
  response.render('NewParty')
});

app.post('/parties', function(request, response){
	console.log(request.body)
	party = new Party(request.body)
	party.save();
		response.send({gio: 'ok'})
});

Party.findOne({"name" : "rnjfberbhpi"}, function(err, theParty){
	if(err) return console.log(err);
	console.log("success", theParty)

})


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('The database is connected!')
});


server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
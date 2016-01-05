var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/', function(req,res){
  res.render('index');
});

// START THE SERVER

http.listen(process.env.PORT || 3000, function(){
  console.log("local host");
});
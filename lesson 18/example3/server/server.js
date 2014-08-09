var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../client')));
 

app.get('/people.json', function(req, res){
  var data = [
			  	{
			  		name: 'Scott',
			  		hobby: 'spelunking'
			  	},
			  	
			  	{
			  		name: 'Matt',
			  		hobby: 'ping-pong'
			  	},

			  	{
			  		name: 'Christina',
			  		hobby: 'saving the world'
			  	},

			  	{
			  		name: 'Steven',
			  		hobby: 'collecting turtles'
			  	}

		  	];
  res.send(data)
});


app.listen(8000);
console.log('Listening on port 8000');
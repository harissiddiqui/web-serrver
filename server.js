var express = require('express');
var app = express();
var PORT = 3000;
var middleware= require('./middleware.js');


app.use(middleware.logger);

app.get('/', function(req, res){       //route & function

    res.send('Hello Express');

});

app.get('/about', middleware.requireAuthentication ,function(req, res){       //route & function

    res.send('About Us!');
    


});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(3000, function(){
    console.log('Express Server Started');
    console.log('At Port:' + PORT);
    
});
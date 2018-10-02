var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;
var app = express();

mongoose.connect('mongodb://admin:admin123@ds113923.mlab.com:13923/node_todo_sample', {useNewUrlParser:true}, function(err) {
    if (err) { console.log(err); }
    
});

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: String,
    email: String,
    description: String,
    type: String
});

var Customer = mongoose.model('Customer', customerSchema);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.send(path.join(__dirname + '/public/index.html'));
});

app.post('/', function(req, res){
    var customer;
    if(req.body.email && req.body.name){
        customer = Customer({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
            type: req.body.type.id
        })
        .save(function(err){
           // if(err) throw err;

            console.log('Customer Saved');
        });

        res.send('Thank you!');
    }
});

// app.listen(port, function(){
//     console.log('Server started');
// });

console.log("Calling app.listen().");

var server = app.listen(port, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

console.log("app.listen() executed.");
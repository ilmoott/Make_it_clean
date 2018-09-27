const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://admin:admin123@ds113923.mlab.com:13923/node_todo_sample');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: String,
    email: String,
    description: String,
    type: String
});

let Customer = mongoose.model('Customer', customerSchema);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.send(path.join(__dirname + '/public/index.html'));
});

app.post('/', function(req, res){
    let customer;
    if(req.body.email && req.body.name){
        customer = Customer({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
            type: req.body.type.id
        })
        .save(function(err){
            if(err) throw err;

            console.log('Customer Saved');
        });

        res.send('Thank you!');
    }
});

app.listen(port, function(){
    console.log('Server started on the port 3000');
});

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var compression = require('compression');
var nodemailer = require('nodemailer');


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

app.use(compression());

app.use('/', express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.send(path.join(__dirname + '/public/index.html'));
});

app.get('/thankyou', function(req, res){
    res.send(path.join(__dirname + '/public/thankyou.html'));
});

app.post('/', function(req, res){
    
    var customer;
    if(req.body.email && req.body.name){
        customer = Customer({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description
        })
        .save(function(err){
           if(err) throw err;

            console.log('Customer Saved');

        });
        var output = `
            <p>You have a new contact request:</p>
            <br><br>
            <h3>Contact Details</h3>
            <br>
            <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            </ul>
            <p>Description: ${req.body.description}</p>
            `;

            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: 'contact@makeitclean.com.au', // generated ethereal user
                  pass: 'daphnee02' // generated ethereal password
                }
              });
            
              // setup email data with unicode symbols
              var mailOptions = {
                from: '"Make It Clean Website" <contact@makeitclean.com.au>', // sender address
                to: "contact@makeitclean.com.au", // list of receivers
                subject: "New Contact", // Subject line
                html: output // html body
              };
            
              // send mail with defined transport object
              transporter.sendMail(mailOptions, function(error, info){
                  if (error){
                      return console.log(error);
                  }

                  console.log("Message sent: %s", info.messageId);
                  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              });
            
              
            
            //   Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            //   Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }
        res.redirect('/thankyou.html');
    });



// app.listen(port, function(){
//     console.log('Server started');
// });

console.log("Calling app.listen().");

var server = app.listen(port, function (){
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
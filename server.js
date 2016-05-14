var express = require('express');

//create our app

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public')); //exposing the folder public to the public
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
}); // when the server is up, it will call the function which console log

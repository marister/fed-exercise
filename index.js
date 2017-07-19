'use strict';

var path = require('path');
var bodyParser = require('body-parser');

var repo = require('./repo');
var express = require('express')
var app = express()
var md5 = require('md5');
var commentValidator = require('./comment-validator');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'));
});

app.get('/comments/all', function (req, res) {
  let allComments = repo.all;
  res.json(allComments);
});

app.post('/comments/new', function(req, res) {
  var comment = req.body;
  var commentError = commentValidator.validateComment(comment);
  if(!commentError){
    comment.created = new Date();
    comment.avatar = 'https://s.gravatar.com/avatar/' + md5(comment.email) + '?r=r';
    repo.add(comment);
    res.json(comment);
  } else {
    res.status(400).json({
      error: commentError
    });
  }

});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

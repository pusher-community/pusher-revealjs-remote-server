var Pusher = require('pusher');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// TODO: allow config to be defined in a config.json for more flexability

var config = {
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
};

var pusher = new Pusher(config);

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/pusher-auth', function (req, res) {
  var socketId = req.body.socket_id;
  var channelName = req.body.channel_name;
  
  var auth = pusher.authenticate(socketId, channelName);
  res.send(auth);
});

var server = app.listen((process.env.PORT || 5000), function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _botbuilder = require('botbuilder');

var builder = _interopRequireWildcard(_botbuilder);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setting up the server
var server = _restify2.default.createServer();
server.listen(3978, function () {
  console.log("Server listening to 3978");
});
// Create chat bot
var connector = new builder.ChatConnector({
  appId: "",
  appPassword: ""
});
var bot = new builder.UniversalBot(connector);
server.post("/api/messages", connector.listen());
bot.dialog("/", function (session) {
  // Edit more dialog here ❺
  session.send("Isa " + session.message.text);
});
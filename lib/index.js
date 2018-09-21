'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _botbuilder = require('botbuilder');

var builder = _interopRequireWildcard(_botbuilder);

var _loadStore = require('./loadStore');

var _loadStore2 = _interopRequireDefault(_loadStore);

var _conversationalActions = require('./redux/actions/conversationalActions');

var DialogActions = _interopRequireWildcard(_conversationalActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup in memory storage

// local Redux
// Bot-framework
var inMemoryStorage = new builder.MemoryBotStorage();

// Setting up the server
var server = _restify2.default.createServer();
server.listen(3978, function () {
  console.log('Server listening to 3978');
});
// Create chat bot
var connector = new builder.ChatConnector({
  appId: '',
  appPassword: ''
});
var bot = new builder.UniversalBot(connector).set('storage', inMemoryStorage);

server.post('/api/messages', connector.listen());

// Dialogs
bot.dialog('/', function (session, result) {
  // Edit more dialog here ❺
  session.send('You said ' + session.message.text);
  // Redux setup
  var store = (0, _loadStore2.default)(session);

  var _ref = session.message || {},
      attachments = _ref.attachments,
      text = _ref.text; // What user sends


  if (attachments || result || text) {
    store.dispatch(DialogActions.receiveMessage(text, attachments, result));
  }
});
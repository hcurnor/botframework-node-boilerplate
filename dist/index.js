'use strict';
var _restify = require('restify');var _restify2 = _interopRequireDefault(_restify);
var _botbuilder = require('botbuilder');var builder = _interopRequireWildcard(_botbuilder);

var _hoistedLuisIntents = require('./constants/hoistedLuisIntents');var _hoistedLuisIntents2 = _interopRequireDefault(_hoistedLuisIntents);

var _loadStore = require('./loadStore');var _loadStore2 = _interopRequireDefault(_loadStore);

var _productActions = require('./redux/actions/productActions');var ProductActions = _interopRequireWildcard(_productActions);
var _helpActions = require('./redux/actions/helpActions');var HelpActions = _interopRequireWildcard(_helpActions);
var _businessActions = require('./redux/actions/businessActions');var BusinessActions = _interopRequireWildcard(_businessActions);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// DEV
// local Redux
require('dotenv').config();
// Setup in memory storage
// import * as DialogActions from './redux/actions/dialogActions';
// LUIS INTENTS
// Bot-framework
var inMemoryStorage = new builder.MemoryBotStorage(); // Create chat bot
var connector = new builder.ChatConnector({ appId: process.env.MICROSOFT_APP_ID || '', appPassword: process.env.MICROSOFT_APP_PASSWORD || '' });


var bot = new builder.UniversalBot(connector, {
  localizerSettings: {
    defaultLocale: 'es' } });



bot.set('storage', inMemoryStorage); // Register in memory storage

// Setting up the server
var server = _restify2.default.createServer();
server.listen(process.env.PORT || 3978, function () {
  console.log('Server listening to ' + (process.env.PORT || 3978));
});

server.post('/api/messages', connector.listen());

// =========================================================
// Bot Recognizers
// =========================================================

// Your-LUIS-App-ID
var LuisAppID = process.env.LUIS_APP_ID;
// Your-LUIS-Key
var LuisKey = process.env.LUIS_APP_KEY;
var LuisModel = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/' + LuisAppID + '?subscription-key=' + LuisKey;
var recognizer = new builder.LuisRecognizer(LuisModel);

bot.recognizer(recognizer);

// =========================================================
// Dialogs
// =========================================================

// Default
bot.dialog('/', new builder.SimpleDialog(function (session, result) {
  // Redux store setup
  var _ref = session.message || {},attachments = _ref.attachments,text = _ref.text; // What user sends
  if (attachments || result || text) {
    session.send('default_message');
  }
}));

_hoistedLuisIntents2.default.forEach(function (intent) {
  bot.dialog('/' + intent.dialog,
  function (session) {
    session.send(intent.locale);
  }).triggerAction({
    matches: intent.matches });

});

// Product Information
bot.dialog('ProductInfoDialog',
function (session, args) {
  var store = (0, _loadStore2.default)(session);var _ref2 =
  session.message || {},attachments = _ref2.attachments,text = _ref2.text; // What user sends
  var entities = args.intent.entities;
  if (attachments || text) {
    store.dispatch(ProductActions.requestInfo(text, entities));
  }
}).triggerAction({
  matches: 'ProductInformation' });


// Business Information
bot.dialog('BusinessInfoDialog',
function (session, args) {
  var store = (0, _loadStore2.default)(session);var _ref3 =
  session.message || {},attachments = _ref3.attachments,text = _ref3.text; // What user sends
  var entities = args.intent.entities;
  if (attachments || text) {
    store.dispatch(BusinessActions.requestInfo(text, entities));
  }
}).triggerAction({
  matches: 'RequestInfo' });


// Shipping Information
bot.dialog('ShippingDialog',
function (session, args) {
  var store = (0, _loadStore2.default)(session);var _ref4 =
  session.message || {},attachments = _ref4.attachments,text = _ref4.text; // What user sends
  var entities = args.intent.entities;
  if (attachments || text) {
    store.dispatch(BusinessActions.shippingInfo(text, entities));
  }
}).triggerAction({
  matches: 'ShipingInfo' });


// Request to talk to a human
bot.dialog('TalkToHumanDialog',
function (session, args) {
  var store = (0, _loadStore2.default)(session);var _ref5 =
  session.message || {},attachments = _ref5.attachments,text = _ref5.text; // What user sends
  var entities = args.intent.entities;
  if (attachments || text) {
    store.dispatch(HelpActions.talkToHuman(text, entities));
  }
}).triggerAction({
  matches: 'TalkToHuman' });
//# sourceMappingURL=index.js.map
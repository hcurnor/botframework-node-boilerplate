'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getDialog = undefined;exports.default =
































































root;var _effects = require('redux-saga/effects');var _conversationalActions = require('../actions/conversationalActions');var _actionTypes = require('../../constants/actionTypes');var _dialogActions = require('../actions/dialogActions');var _marked = /*#__PURE__*/regeneratorRuntime.mark(receiveMessageAction),_marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchReceiveMessageAction),_marked3 = /*#__PURE__*/regeneratorRuntime.mark(root); // Since using multiple reducers to acces dialog
var getDialog = exports.getDialog = function getDialog(state) {return state.dialog;}; // Actions
function receiveMessageAction(action) {var text, changeCityMatch, currentCityMatch, resetMatch, endConversationMatch, _ref, city, _ref2, username, newCity, messageText;return regeneratorRuntime.wrap(function receiveMessageAction$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:text = action.payload.text;changeCityMatch = /^change city to (.*)/i.exec(text);currentCityMatch = /^current city/i.exec(text);resetMatch = /^reset/i.exec(text);endConversationMatch = /^end conversation/i.exec(text);_context.next = 7;return (0, _effects.select)(getDialog);case 7:_ref = _context.sent;city = _ref.city;_context.next = 11;return (0, _effects.select)(getDialog);case 11:_ref2 = _context.sent;username = _ref2.username;if (city) {_context.next = 23;break;}city = 'Seattle';_context.next = 17;return (0, _effects.put)((0, _conversationalActions.setCity)(city));case 17:_context.next = 19;return (0, _effects.put)((0, _dialogActions.sendMessage)('Welcome to the Search City bot. I\'m currently configured to search for things in ' + city));case 19:_context.next = 21;return (0, _effects.put)((0, _dialogActions.promptText)('Before get started, please tell me your name?'));case 21:_context.next = 62;break;case 23:if (username) {_context.next = 30;break;}_context.next = 26;return (0, _effects.put)((0, _conversationalActions.setUsername)(text));case 26:_context.next = 28;return (0, _effects.put)((0, _dialogActions.sendMessage)('Welcome ' + text + '!\n * If you want to know which city I\'m using for my searches type \'current city\'. \n * Want to change the current city? Type \'change city to cityName\'. \n * Want to change it just for your searches? Type \'change my city to cityName\''));case 28:_context.next = 62;break;case 30:if (!changeCityMatch) {_context.next = 38;break;}newCity = changeCityMatch[1];_context.next = 34;return (0, _effects.put)((0, _conversationalActions.setCity)(newCity));case 34:_context.next = 36;return (0, _effects.put)((0, _dialogActions.sendMessage)('All set ' + username + '. From now on, all my searches will be for things in ' + newCity + '.'));case 36:_context.next = 62;break;case 38:if (!currentCityMatch) {_context.next = 43;break;}_context.next = 41;return (0, _effects.put)((0, _dialogActions.sendMessage)('Hey ' + username + ', I\'m currently configured to search for things in ' + city + '.'));case 41:_context.next = 62;break;case 43:if (!resetMatch) {_context.next = 50;break;}_context.next = 46;return (0, _effects.put)((0, _conversationalActions.reset)());case 46:_context.next = 48;return (0, _effects.put)((0, _dialogActions.sendMessage)('Oops... I\'m suffering from a memory loss...'));case 48:_context.next = 62;break;case 50:if (!endConversationMatch) {_context.next = 57;break;}_context.next = 53;return (0, _effects.put)((0, _dialogActions.endConversation)());case 53:_context.next = 55;return (0, _effects.put)((0, _dialogActions.sendMessage)('Ending Conversation...'));case 55:_context.next = 62;break;case 57:messageText = action.payload.text.trim();_context.next = 60;return (0, _effects.put)((0, _dialogActions.sendMessage)(username + ', wait a few seconds. Searching for \'' + messageText + '\' in \'' + city + '\'...'));case 60:_context.next = 62;return (0, _effects.put)((0, _dialogActions.sendMessage)('https://www.bing.com/search?q=' + encodeURIComponent(messageText + ' in ' + city)));case 62:case 'end':return _context.stop();}}}, _marked, this);} // Action watcher
function watchReceiveMessageAction() {return regeneratorRuntime.wrap(function watchReceiveMessageAction$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (0, _effects.takeEvery)(_actionTypes.RECEIVE_MESSAGE, receiveMessageAction);case 2:case 'end':return _context2.stop();}}}, _marked2, this);} // Export sagas
function root(session) {return regeneratorRuntime.wrap(function root$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return [(0, _effects.fork)(watchReceiveMessageAction, session)];case 2:case 'end':return _context3.stop();}}}, _marked3, this);}
//# sourceMappingURL=default.js.map
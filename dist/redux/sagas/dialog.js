'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =

















































root;var _botbuilder = require('botbuilder');var builder = _interopRequireWildcard(_botbuilder);var _reduxSaga = require('redux-saga');var _effects = require('redux-saga/effects');var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var _marked = /*#__PURE__*/regeneratorRuntime.mark(propmtText),_marked2 = /*#__PURE__*/regeneratorRuntime.mark(endConversation),_marked3 = /*#__PURE__*/regeneratorRuntime.mark(sendEvent),_marked4 = /*#__PURE__*/regeneratorRuntime.mark(sendMessage),_marked5 = /*#__PURE__*/regeneratorRuntime.mark(watchSendMessage),_marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchPropmtText),_marked7 = /*#__PURE__*/regeneratorRuntime.mark(watchEndConversation),_marked8 = /*#__PURE__*/regeneratorRuntime.mark(watchSendEvent),_marked9 = /*#__PURE__*/regeneratorRuntime.mark(root); // PrompText
function propmtText(session, action) {return regeneratorRuntime.wrap(function propmtText$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return builder.Prompts.text(session, action.payload.text);case 2:case 'end':return _context.stop();}}}, _marked, this);} // End conversation
function endConversation(session) {return regeneratorRuntime.wrap(function endConversation$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return session.endConversation('bye_messages_generic');case 2:case 'end':return _context2.stop();}}}, _marked2, this);} // Send Event
function sendEvent(session, action) {var _action$payload, name, value;return regeneratorRuntime.wrap(function sendEvent$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_action$payload = action.payload, name = _action$payload.name, value = _action$payload.value;_context3.next = 3;return session.send({ type: 'event', name: name, value: value });case 3:case 'end':return _context3.stop();}}}, _marked3, this);} // Send message
function sendMessage(session, action) {var _action$payload2, attachments, text, args, message;return regeneratorRuntime.wrap(function sendMessage$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_action$payload2 = action.payload, attachments = _action$payload2.attachments, text = _action$payload2.text, args = _action$payload2.args;message = new builder.Message(session);if (text && args) {message.text.apply(message, [text].concat(_toConsumableArray(args)));} else {message.text(text);}if (attachments) {message.attachments(attachments);}_context4.next = 6;return session.send(message);case 6:case 'end':return _context4.stop();}}}, _marked4, this);} // Action watchers
function watchSendMessage(session) {return regeneratorRuntime.wrap(function watchSendMessage$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (0, _reduxSaga.takeEvery)(actionTypes.SEND_MESSAGE, sendMessage, session);case 2:case 'end':return _context5.stop();}}}, _marked5, this);}function watchPropmtText(session) {return regeneratorRuntime.wrap(function watchPropmtText$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (0, _reduxSaga.takeEvery)(actionTypes.PROMPT_TEXT, propmtText, session);case 2:case 'end':return _context6.stop();}}}, _marked6, this);}function watchEndConversation(session) {return regeneratorRuntime.wrap(function watchEndConversation$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (0, _reduxSaga.takeEvery)(actionTypes.END_CONVERSATION, endConversation, session);case 2:case 'end':return _context7.stop();}}}, _marked7, this);}function watchSendEvent(session) {return regeneratorRuntime.wrap(function watchSendEvent$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (0, _reduxSaga.takeEvery)(actionTypes.SEND_EVENT, sendEvent, session);case 2:case 'end':return _context8.stop();}}}, _marked8, this);} // Export sagas
function root(session) {return regeneratorRuntime.wrap(function root$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return [(0, _effects.fork)(watchPropmtText, session), (0, _effects.fork)(watchEndConversation, session), (0, _effects.fork)(watchSendEvent, session), (0, _effects.fork)(watchSendMessage, session)];case 2:case 'end':return _context9.stop();}}}, _marked9, this);}
//# sourceMappingURL=dialog.js.map
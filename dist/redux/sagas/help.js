'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =




































root;var _effects = require('redux-saga/effects');var _nodemailer = require('nodemailer');var _nodemailer2 = _interopRequireDefault(_nodemailer);var _actionTypes = require('../../constants/actionTypes');var _dialogActions = require('../actions/dialogActions');var _botConfig = require('../../constants/botConfig');var _botConfig2 = _interopRequireDefault(_botConfig);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _marked = /*#__PURE__*/regeneratorRuntime.mark(talkToHumanAction),_marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchTalkToHumanAction),_marked3 = /*#__PURE__*/regeneratorRuntime.mark(root);require('dotenv').config();var transporter = _nodemailer2.default.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_SENT, pass: process.env.EMAIL_PASSWORD } });function talkToHumanAction() {var mailOptions;return regeneratorRuntime.wrap(function talkToHumanAction$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:mailOptions = { from: process.env.EMAIL_SENT, to: _botConfig2.default.contactEmail, subject: 'Chopibot - Requiere de tu intervension', text: 'Revisa las conversaciones, un usuario ha solicitado intervención humana.' };transporter.sendMail(mailOptions, function (error) {if (error) {console.log(error);}});_context.next = 4;return (0, _effects.put)((0, _dialogActions.sendMessage)('help_human_success'));case 4:case 'end':return _context.stop();}}}, _marked, this);} // Action watcher
function watchTalkToHumanAction(session) {return regeneratorRuntime.wrap(function watchTalkToHumanAction$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (0, _effects.takeEvery)(_actionTypes.TALK_HUMAN, talkToHumanAction, session);case 2:case 'end':return _context2.stop();}}}, _marked2, this);} // Export sagas
function root(session) {return regeneratorRuntime.wrap(function root$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return [(0, _effects.fork)(watchTalkToHumanAction, session)];case 2:case 'end':return _context3.stop();}}}, _marked3, this);}
//# sourceMappingURL=help.js.map
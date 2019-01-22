'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =










































































root;var _effects = require('redux-saga/effects');var _actionTypes = require('../../constants/actionTypes');var _dialogActions = require('../actions/dialogActions');var _botConfig = require('../../constants/botConfig');var _botConfig2 = _interopRequireDefault(_botConfig);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _marked = /*#__PURE__*/regeneratorRuntime.mark(productInfoAction),_marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchProductInfoAction),_marked3 = /*#__PURE__*/regeneratorRuntime.mark(shipppingInfoAction),_marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchShippingInfoAction),_marked5 = /*#__PURE__*/regeneratorRuntime.mark(root);function languageHelper(string) {switch (string) {case 'telephono':case 'celular':case 'numero':case 'numeros':return 'telephone';case 'direccion':case 'lugar':case 'domicilio':return 'address';case 'email':case 'correo':case 'e-mail':case 'electronico':return 'email';case 'horario':case 'horarios':return 'hours';default:return string;}} // Actions
function productInfoAction(session, action) {var entities, i, entity, property, helper, response;return regeneratorRuntime.wrap(function productInfoAction$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: // LUIS entities
          entities = action.payload.entities;if (!(entities && entities.length > 0)) {_context.next = 20;break;}i = 0;case 3:if (!(entities.length > i)) {_context.next = 18;break;}entity = entities[i].entity;property = languageHelper(entity.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));if (!(_botConfig2.default[property] && _botConfig2.default[property].length > 0)) {_context.next = 13;break;}helper = _botConfig2.default[property].length > 1 ? 'mas de uno:' : ':';response = _botConfig2.default[property].join(', ');_context.next = 11;return (0, _effects.put)((0, _dialogActions.sendMessage)('business_info_found', [entity, helper, response]));case 11:_context.next = 15;break;case 13:_context.next = 15;return (0, _effects.put)((0, _dialogActions.sendMessage)('business_info_not_found', [entity]));case 15:i += 1;_context.next = 3;break;case 18:_context.next = 22;break;case 20:_context.next = 22;return (0, _effects.put)((0, _dialogActions.sendMessage)('info_missing'));case 22:case 'end':return _context.stop();}}}, _marked, this);} // Action watcher
function watchProductInfoAction(session) {return regeneratorRuntime.wrap(function watchProductInfoAction$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (0, _effects.takeEvery)(_actionTypes.BUSINESS_INFO, productInfoAction, session);case 2:case 'end':return _context2.stop();}}}, _marked2, this);}function shipppingInfoAction() {var string;return regeneratorRuntime.wrap(function shipppingInfoAction$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(_botConfig2.default.shippingCost && _botConfig2.default.currency)) {_context3.next = 6;break;}string = _botConfig2.default.currency + ' ' + _botConfig2.default.shippingCost;_context3.next = 4;return (0, _effects.put)((0, _dialogActions.sendMessage)('business_info_shipping', [string]));case 4:_context3.next = 8;break;case 6:_context3.next = 8;return (0, _effects.put)((0, _dialogActions.sendMessage)('business_info_missing'));case 8:case 'end':return _context3.stop();}}}, _marked3, this);} // Action watcher
function watchShippingInfoAction(session) {return regeneratorRuntime.wrap(function watchShippingInfoAction$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (0, _effects.takeEvery)(_actionTypes.SHIPPING_INFO, shipppingInfoAction, session);case 2:case 'end':return _context4.stop();}}}, _marked4, this);} // Export sagas
function root(session) {return regeneratorRuntime.wrap(function root$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return [(0, _effects.fork)(watchProductInfoAction, session), (0, _effects.fork)(watchShippingInfoAction, session)];case 2:case 'end':return _context5.stop();}}}, _marked5, this);}
//# sourceMappingURL=business.js.map
'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _effects = require('redux-saga/effects');

var _default = require('./default');var _default2 = _interopRequireDefault(_default);
var _dialog = require('./dialog');var _dialog2 = _interopRequireDefault(_dialog);
var _product = require('./product');var _product2 = _interopRequireDefault(_product);
var _business = require('./business');var _business2 = _interopRequireDefault(_business);
var _help = require('./help');var _help2 = _interopRequireDefault(_help);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _marked = /*#__PURE__*/regeneratorRuntime.mark(

rootSaga);function rootSaga(session) {return regeneratorRuntime.wrap(function rootSaga$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
            (0, _effects.all)([
            (0, _effects.fork)(_default2.default, session),
            (0, _effects.fork)(_dialog2.default, session),
            (0, _effects.fork)(_business2.default, session),
            (0, _effects.fork)(_product2.default, session),
            (0, _effects.fork)(_help2.default, session)]));case 2:case 'end':return _context.stop();}}}, _marked, this);}exports.default =



rootSaga;
//# sourceMappingURL=index.js.map
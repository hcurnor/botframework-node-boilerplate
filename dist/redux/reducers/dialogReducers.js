'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.default =





conversationReduce;var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}var defaultState = { city: null, username: null };function conversationReduce() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;var action = arguments[1];
  switch (action.type) {
    case actionTypes.RESET:
      return defaultState;
    case actionTypes.SET_CITY:
      return _extends({}, state, { city: action.payload.city });
    case actionTypes.SET_USERNAME:
      return _extends({}, state, { username: action.payload.username });
    default:
      return state;}

}
//# sourceMappingURL=dialogReducers.js.map
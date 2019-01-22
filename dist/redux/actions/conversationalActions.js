'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.

setUsername = setUsername;exports.



setCity = setCity;exports.



reset = reset;var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function setUsername(username) {return { type: actionTypes.SET_USERNAME, payload: { username: username } };}function setCity(city) {return { type: actionTypes.SET_CITY, payload: { city: city } };}function reset() {
  return { type: actionTypes.RESET };
}
//# sourceMappingURL=conversationalActions.js.map
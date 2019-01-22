'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.

promptText = promptText;exports.



requestInfo = requestInfo;var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function promptText(text) {return { type: actionTypes.PROMPT_TEXT, payload: { text: text } };}function requestInfo(text, entities) {
  return {
    type: actionTypes.PRODUCT_INFO,
    payload: { entities: entities, text: text } };

}
//# sourceMappingURL=productActions.js.map
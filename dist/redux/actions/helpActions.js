'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.

talkToHuman = talkToHuman;exports.







requestInfo = requestInfo;var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function talkToHuman(text, entities) {console.log('---actions-----', text, entities);return { type: actionTypes.TALK_HUMAN, payload: { entities: entities, text: text } };}function requestInfo(text, entities) {
  return {
    type: actionTypes.BUSINESS_INFO,
    payload: { entities: entities, text: text } };

}
//# sourceMappingURL=helpActions.js.map
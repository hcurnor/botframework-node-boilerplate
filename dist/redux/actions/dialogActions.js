'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.

promptText = promptText;exports.



receiveMessage = receiveMessage;exports.






sendEvent = sendEvent;exports.






sendMessage = sendMessage;exports.






endConversation = endConversation;var _actionTypes = require('../../constants/actionTypes');var actionTypes = _interopRequireWildcard(_actionTypes);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function promptText(text) {return { type: actionTypes.PROMPT_TEXT, payload: { text: text } };}function receiveMessage(text, attachments, result) {return { type: actionTypes.RECEIVE_MESSAGE, payload: { attachments: attachments, result: result, text: text } };}function sendEvent(name, value) {return { type: actionTypes.SEND_EVENT, payload: { name: name, value: value } };}function sendMessage(text, args, attachments) {return { type: actionTypes.SEND_MESSAGE, payload: { text: text, args: args, attachments: attachments } };}function endConversation(text, attachments, result) {
  return {
    type: actionTypes.END_CONVERSATION,
    payload: { attachments: attachments, result: result, text: text } };

}
//# sourceMappingURL=dialogActions.js.map
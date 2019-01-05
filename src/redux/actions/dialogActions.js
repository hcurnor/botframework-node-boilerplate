import * as actionTypes from '../../constants/actionTypes';

export function promptText(text) {
  return { type: actionTypes.PROMPT_TEXT, payload: { text } };
}

export function receiveMessage(text, attachments, result) {
  return {
    type: actionTypes.RECEIVE_MESSAGE,
    payload: { attachments, result, text },
  };
}

export function sendEvent(name, value) {
  return {
    type: actionTypes.SEND_EVENT,
    payload: { name, value },
  };
}

export function sendMessage(text, args, attachments) {
  return {
    type: actionTypes.SEND_MESSAGE,
    payload: { text, args, attachments },
  };
}

export function endConversation(text, attachments, result) {
  return {
    type: actionTypes.END_CONVERSATION,
    payload: { attachments, result, text },
  };
}

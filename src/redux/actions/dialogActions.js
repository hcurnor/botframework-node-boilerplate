import {
  RECEIVE_MESSAGE,
  PROMPT_TEXT,
  SEND_MESSAGE,
  END_CONVERSATION,
  SEND_EVENT,
} from '../../constants/actionTypes';

export function promptText(text) {
  return { type: PROMPT_TEXT, payload: { text } };
}

export function receiveMessage(text, attachments, result) {
  return {
    type: RECEIVE_MESSAGE,
    payload: { attachments, result, text },
  };
}

export function sendEvent(name, value) {
  return {
    type: SEND_EVENT,
    payload: { name, value },
  };
}

export function sendMessage(text, attachments) {
  return {
    type: SEND_MESSAGE,
    payload: { attachments, text },
  };
}

export function endConversation(text, attachments, result) {
  return {
    type: END_CONVERSATION,
    payload: { attachments, result, text },
  };
}

import {
  RECEIVE_MESSAGE,
  PROMPT_TEXT,
  SEND_MESSAGE,
  END_CONVERSATION,
  SEND_EVENT,
} from '../../constants/actionTypes';

export function promptText(text) {
  console.log('####### promptText');
  return { type: PROMPT_TEXT, payload: { text } };
}

export function receiveMessage(text, attachments, result) {
  console.log('####### receiveMessage');
  return {
    type: RECEIVE_MESSAGE,
    payload: { attachments, result, text },
  };
}

export function sendEvent(name, value) {
  console.log('####### sendEvent');
  return {
    type: SEND_EVENT,
    payload: { name, value },
  };
}

export function sendMessage(text, attachments) {
  console.log('####### sendMessage');
  return {
    type: SEND_MESSAGE,
    payload: { attachments, text },
  };
}

export function endConversation(text, attachments, result) {
  console.log('####### endConversation');
  return {
    type: END_CONVERSATION,
    payload: { attachments, result, text },
  };
}

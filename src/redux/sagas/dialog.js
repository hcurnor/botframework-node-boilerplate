import * as builder from 'botbuilder';
import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

// PrompText
function* propmtText(session, action) {
  yield builder.Prompts.text(session, action.payload.text);
}
// End conversation
function* endConversation(session) {
  yield session.endConversation('bye_messages_generic');
}
// Send Event
function* sendEvent(session, action) {
  const { name, value } = action.payload;
  yield session.send({ type: 'event', name, value });
}
// Send message
function* sendMessage(session, action) {
  const { attachments, text, args } = action.payload;
  const message = new builder.Message(session);

  if (text && args) {
    message.text(text, ...args);
  } else {
    message.text(text);
  }
  if (attachments) {
    message.attachments(attachments);
  }
  yield session.send(message);
}
// Action watchers

function* watchSendMessage(session) {
  yield takeEvery(actionTypes.SEND_MESSAGE, sendMessage, session);
}
function* watchPropmtText(session) {
  yield takeEvery(actionTypes.PROMPT_TEXT, propmtText, session);
}
function* watchEndConversation(session) {
  yield takeEvery(actionTypes.END_CONVERSATION, endConversation, session);
}
function* watchSendEvent(session) {
  yield takeEvery(actionTypes.SEND_EVENT, sendEvent, session);
}

// Export sagas

export default function* root(session) {
  yield [
    fork(watchPropmtText, session),
    fork(watchEndConversation, session),
    fork(watchSendEvent, session),
    fork(watchSendMessage, session),
  ];
}

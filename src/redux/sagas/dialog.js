import builder from 'botbuilder';
import { takeEvery } from 'redux-saga';
import DialogActions from '../actions/dialogActions';

export default function* (session) {
  yield takeEvery(DialogActions.PROMPT_TEXT, function* (action) {
    yield builder.Prompts.text(session, action.payload.text);
  });

  yield takeEvery(DialogActions.END_CONVERSATION, function* () {
    yield session.endConversation('Bye!');
  });

  yield takeEvery(DialogActions.SEND_EVENT, function* (action) {
    const { name, value } = action.payload;
    yield session.send({ type: 'event', name, value });
  });

  yield takeEvery(DialogActions.SEND_MESSAGE, function* (action) {
    const { attachments, text } = action.payload;
    const message = new builder.Message(session);

    if (text) {
      message.text(text);
    }
    if (attachments) {
      message.attachments(attachments);
    }
    yield session.send(message);
  });
}

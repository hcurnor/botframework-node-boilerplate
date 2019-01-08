import { put, takeEvery, fork } from 'redux-saga/effects';
import nodemailer from 'nodemailer';
import { TALK_HUMAN } from '../../constants/actionTypes';
import { sendMessage } from '../actions/dialogActions';
import botConfig from '../../constants/botConfig';

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENT,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function* talkToHumanAction() {
  const mailOptions = {
    from: process.env.EMAIL_SENT,
    to: botConfig.contactEmail,
    subject: 'Chopibot - Requiere de tu intervension',
    text: 'Revisa las conversaciones, un usuario ha solicitado intervención humana.',
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
  yield put(sendMessage('help_human_success'));
}

// Action watcher
function* watchTalkToHumanAction(session) {
  yield takeEvery(TALK_HUMAN, talkToHumanAction, session);
}

// Export sagas
export default function* root(session) {
  yield [
    fork(watchTalkToHumanAction, session),
  ];
}

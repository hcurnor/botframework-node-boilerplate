import { put, takeEvery, fork } from 'redux-saga/effects';
import nodemailer from 'nodemailer';
import { TALK_HUMAN } from '../../constants/actionTypes';
import { sendMessage } from '../actions/dialogActions';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreplychopinmol@gmail.com',
    pass: 'baconbacon',
  },
});

const mailOptions = {
  from: 'noreplychopinmol@gmail.com',
  to: 'jp@calaps.com',
  subject: 'Seguimiento a cliente por Chopi Bot',
  text: 'El usuario a solicitado atención humana.',
};

function* talkToHumanAction() {
  let ok = false;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      ok = true;
      console.log('Email sent: ', info.response);
    }
  });
  console.log('mostazasssss: ', ok);
  if (ok === true) {
    yield put(sendMessage('contact_to_humman'));
  } else {
    yield put(sendMessage('help_human_success_error'));
  }
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

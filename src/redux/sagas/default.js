import {
  put,
  select,
  takeEvery,
  fork,
} from 'redux-saga/effects';
import { reset, setCity, setUsername } from '../actions/conversationalActions';
import { RECEIVE_MESSAGE } from '../../constants/actionTypes';
import {
  promptText,
  sendMessage,
  endConversation,
} from '../actions/dialogActions';

// Since using multiple reducers to acces dialog
export const getDialog = state => state.dialog;

// Actions

function* receiveMessageAction(action) {
  const { text } = action.payload;
  const changeCityMatch = /^change city to (.*)/i.exec(text);
  const currentCityMatch = /^current city/i.exec(text);
  const resetMatch = /^reset/i.exec(text);
  const endConversationMatch = /^end conversation/i.exec(text);
  let { city } = yield select(getDialog);
  const { username } = yield select(getDialog);

  if (!city) {
    console.log('!!!!!!!!!!!!!!! NO CITY');
    city = 'Seattle';

    yield put(setCity(city));
    yield put(sendMessage(`Welcome to the Search City bot. I'm currently configured to search for things in ${city}`));
    yield put(promptText('Before get started, please tell me your name?'));
  } else if (!username) {
    console.log('###### else if  NO username');
    yield put(setUsername(text));
    yield put(sendMessage(`Welcome ${text}!\n * If you want to know which city I'm using for my searches type 'current city'. \n * Want to change the current city? Type 'change city to cityName'. \n * Want to change it just for your searches? Type 'change my city to cityName'`));
  } else if (changeCityMatch) {
    console.log('###### CHANGE CITY');
    const newCity = changeCityMatch[1];

    yield put(setCity(newCity));
    yield put(sendMessage(`All set ${username}. From now on, all my searches will be for things in ${newCity}.`));
  } else if (currentCityMatch) {
    console.log('###### Currently City Match');
    yield put(sendMessage(`Hey ${username}, I'm currently configured to search for things in ${city}.`));
  } else if (resetMatch) {
    console.log('###### RESET');
    yield put(reset());
    yield put(sendMessage('Oops... I\'m suffering from a memory loss...'));
  } else if (endConversationMatch) {
    console.log('###### END CONVERSATION');
    yield put(endConversation());
    yield put(sendMessage('Ending Conversation...'));
  } else {
    const messageText = action.payload.text.trim();

    yield put(sendMessage(`${username}, wait a few seconds. Searching for '${messageText}' in '${city}'...`));
    yield put(sendMessage(`https://www.bing.com/search?q=${encodeURIComponent(`${messageText} in ${city}`)}`));
  }
}

// Action watcher
function* watchReceiveMessageAction() {
  yield takeEvery(RECEIVE_MESSAGE, receiveMessageAction);
}

// Export sagas

export default function* root(session) {
  yield [
    fork(watchReceiveMessageAction, session),
  ];
}

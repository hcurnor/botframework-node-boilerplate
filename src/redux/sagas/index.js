
import { all, fork } from 'redux-saga/effects';

import defaultSaga from './default';
import dialog from './dialog';

function* rootSaga(session) {
  yield all([
    fork(defaultSaga, session),
    fork(dialog, session),
  ]);
}

export default rootSaga;

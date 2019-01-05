
import { all, fork } from 'redux-saga/effects';

import defaultSaga from './default';
import dialog from './dialog';
import product from './product';

function* rootSaga(session) {
  yield all([
    fork(defaultSaga, session),
    fork(dialog, session),
    fork(product, session),
  ]);
}

export default rootSaga;

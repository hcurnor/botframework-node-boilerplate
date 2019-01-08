
import { all, fork } from 'redux-saga/effects';

import defaultSaga from './default';
import dialog from './dialog';
import product from './product';
import business from './business';
import help from './help';

function* rootSaga(session) {
  yield all([
    fork(defaultSaga, session),
    fork(dialog, session),
    fork(business, session),
    fork(product, session),
    fork(help, session),
  ]);
}

export default rootSaga;

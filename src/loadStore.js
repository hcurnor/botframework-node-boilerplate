import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createDefaultSaga from './redux/sagas/default';
import createDialogSagas from './redux/sagas/dialog';
import reducer from './redux/reducers/index';

export default function loadStore(sessionParam) {
  const session = sessionParam;
  const saga = createSagaMiddleware();
  const store = createStore(
    reducer,

    // Restore the store from conversationData
    session.conversationData,

    applyMiddleware(
      saga,
      () => next => (action) => {
        // Send action to web page for debugging
        session.send({
          type: 'event',
          name: 'action',
          value: action,
        });

        return next(action);
      },
    ),
  );

  store.subscribe(() => {
    // Save the store to conversationData
    session.conversationData = store.getState();
    session.save();

    // Send store state to web page for debugging
    session.send({
      type: 'event',
      name: 'store',
      value: store.getState(),
    });
  });

  saga.run(function* () {
    yield* createDialogSagas(session);
    yield* createDefaultSaga(session);
  });

  return store;
}

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/index';
import reducer from './redux/reducers/index';

export default function loadStore(sessionParam) {
  const session = sessionParam;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    // Combine all reducers
    reducer,

    // Restore the store from conversationData
    session.conversationData,

    applyMiddleware(
      sagaMiddleware,
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

  sagaMiddleware.run(rootSaga, session);

  return store;
}

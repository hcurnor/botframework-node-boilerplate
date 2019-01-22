'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =




loadStore;var _redux = require('redux');var _reduxSaga = require('redux-saga');var _reduxSaga2 = _interopRequireDefault(_reduxSaga);var _index = require('./redux/sagas/index');var _index2 = _interopRequireDefault(_index);var _index3 = require('./redux/reducers/index');var _index4 = _interopRequireDefault(_index3);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function loadStore(sessionParam) {
  var session = sessionParam;
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var store = (0, _redux.createStore)(
  // Combine all reducers
  _index4.default,

  // Restore the store from conversationData
  session.conversationData,

  (0, _redux.applyMiddleware)(
  sagaMiddleware,
  function () {return function (next) {return function (action) {
        // Send action to web page for debugging
        session.send({
          type: 'event',
          name: 'action',
          value: action });


        return next(action);
      };};}));



  store.subscribe(function () {
    // Save the store to conversationData
    session.conversationData = store.getState();
    session.save();

    // Send store state to web page for debugging
    session.send({
      type: 'event',
      name: 'store',
      value: store.getState() });

  });

  sagaMiddleware.run(_index2.default, session);

  return store;
}
//# sourceMappingURL=loadStore.js.map
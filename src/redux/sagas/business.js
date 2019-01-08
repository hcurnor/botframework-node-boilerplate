import { put, takeEvery, fork } from 'redux-saga/effects';
import { BUSINESS_INFO, SHIPPING_INFO } from '../../constants/actionTypes';
import { sendMessage } from '../actions/dialogActions';
import botConfig from '../../constants/botConfig';

function languageHelper(string) {
  switch (string) {
    case 'telephono':
    case 'celular':
    case 'numero':
    case 'numeros':
      return 'telephone';
    case 'direccion':
    case 'lugar':
    case 'domicilio':
      return 'address';
    case 'email':
    case 'correo':
    case 'e-mail':
    case 'electronico':
      return 'email';
    case 'horario':
    case 'horarios':
      return 'hours';
    default:
      return string;
  }
}

// Actions
function* productInfoAction(session, action) {
  // LUIS entities
  const { entities } = action.payload;
  if (entities && entities.length > 0) {
    let i = 0;
    while (entities.length > i) {
      const { entity } = entities[i];
      const property = languageHelper(entity.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      if (botConfig[property] && botConfig[property].length > 0) {
        const helper = botConfig[property].length > 1 ? 'mas de uno:' : ':';
        const response = botConfig[property].join(', ');
        yield put(sendMessage('business_info_found', [entity, helper, response]));
      } else {
        yield put(sendMessage('business_info_not_found', [entity]));
      }
      i += 1;
    }
  } else {
    // Fail to detect product
    yield put(sendMessage('info_missing'));
  }
}

// Action watcher
function* watchProductInfoAction(session) {
  yield takeEvery(BUSINESS_INFO, productInfoAction, session);
}

function* shipppingInfoAction() {
  // LUIS entities (pending until each product v2)
  // const { entities } = action.payload;
  if (botConfig.shippingCost && botConfig.currency) {
    const string = `${botConfig.currency} ${botConfig.shippingCost}`;
    yield put(sendMessage('business_info_shipping', [string]));
  } else {
    yield put(sendMessage('business_info_missing'));
  }
}

// Action watcher
function* watchShippingInfoAction(session) {
  yield takeEvery(SHIPPING_INFO, shipppingInfoAction, session);
}

// Export sagas
export default function* root(session) {
  yield [
    fork(watchProductInfoAction, session),
    fork(watchShippingInfoAction, session),
  ];
}

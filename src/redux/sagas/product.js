import _ from 'lodash';
import * as builder from 'botbuilder';

import { put, takeEvery, fork } from 'redux-saga/effects';
import { PRODUCT_INFO } from '../../constants/actionTypes';
import { sendMessage } from '../actions/dialogActions';

// static data about products & bot info
import * as localProducts from '../../constants/products.json';

// IMPORTANT: Arly phase 2.0
// TODO: change local products to the GraphQL JS online store products & Inventory
// Using constants/products.js file instead.

// Actions
function* productInfoAction(session, action) {
  // LUIS entities
  const { entities } = action.payload;
  const expectedEntities = ['product', 'infoRequested', 'value'];
  // Format Luis response (entety.value)
  if (entities && entities.length > 0) {
    const query = new Object();
    expectedEntities.forEach((expectedEntity) => {
      const objectEntity = _.find(entities, entity => entity.type === expectedEntity);
      if (objectEntity) {
        query[expectedEntity] = objectEntity.entity.toLowerCase();
      }
    });
    const { product, infoRequested, value } = query;
    // Final object from store
    const productObj = product ? localProducts[product] : null;
    if (productObj) {
      const optionsArray = infoRequested ? productObj[infoRequested] : null;
      const productValue = value && optionsArray
        ? optionsArray.find(property => property === value) : null;

      if (Array.isArray(optionsArray) && productValue) {
        // The property exist in optionsArray and is array like "colors, size"
        const valueExist = _.find(optionsArray, objectValues => objectValues === productValue);

        if (valueExist) {
          // Add image as attachment if exist
          const attachment = [
            new builder.HeroCard(session)
              .title(productObj.title || '')
              .subtitle(productObj.subTitle || '')
              .text(productObj.description || '')
              .images([builder.CardImage.create(session, productObj.image || '')])
              .buttons([
                builder.CardAction.imBack(session, 'Si, quiero comprar.', 'Comprar'),
              ]),
          ];

          yield put(sendMessage('product_property_found', [product, infoRequested, value], attachment));
          yield put(sendMessage('product_call_to_action'));
        } else {
          // Property not found in the product
          yield put(sendMessage('product_property_not_found', [product, infoRequested, value]));
        }
      } else if (optionsArray && !productValue) {
        // The property exist like "color, size" but is missing the value to compare
        yield put(sendMessage('product_value_missing', [infoRequested]));
      } else if (!optionsArray && productValue) {
        yield put(sendMessage('product_missing_info', [product, value]));
      } else {
        yield put(sendMessage('product_error', [product]));
      }
    } else {
      // Fail to detect entities - LUIS
      yield put(sendMessage('product_entities_error'));
    }
  } else {
    // Fail to detect product
    yield put(sendMessage('product_missing'));
  }
}

// Action watcher
function* watchProductInfoAction(session) {
  yield takeEvery(PRODUCT_INFO, productInfoAction, session);
}

// Export sagas
export default function* root(session) {
  yield [
    fork(watchProductInfoAction, session),
  ];
}

import * as actionTypes from '../../constants/actionTypes';

export function shippingInfo(text, entities) {
  return {
    type: actionTypes.SHIPPING_INFO,
    payload: { entities, text },
  };
}

export function requestInfo(text, entities) {
  return {
    type: actionTypes.BUSINESS_INFO,
    payload: { entities, text },
  };
}

import * as actionTypes from '../../constants/actionTypes';

export function promptText(text) {
  return { type: actionTypes.PROMPT_TEXT, payload: { text } };
}

export function requestInfo(text, entities) {
  return {
    type: actionTypes.PRODUCT_INFO,
    payload: { entities, text },
  };
}

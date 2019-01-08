import * as actionTypes from '../../constants/actionTypes';

export function talkToHuman(text, entities) {
  console.log('---actions-----', text, entities);
  return {
    type: actionTypes.TALK_HUMAN,
    payload: { entities, text },
  };
}

export function requestInfo(text, entities) {
  return {
    type: actionTypes.BUSINESS_INFO,
    payload: { entities, text },
  };
}

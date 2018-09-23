import * as actionTypes from '../../constants/actionTypes';

export function setUsername(username) {
  return { type: actionTypes.SET_USERNAME, payload: { username } };
}

export function setCity(city) {
  return { type: actionTypes.SET_CITY, payload: { city } };
}

export function reset() {
  return { type: actionTypes.RESET };
}

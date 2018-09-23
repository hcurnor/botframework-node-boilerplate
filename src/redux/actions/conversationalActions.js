import { SET_USERNAME, RESET, SET_CITY } from '../../constants/actionTypes';

export function setUsername(username) {
  return { type: SET_USERNAME, payload: { username } };
}

export function setCity(city) {
  return { type: SET_CITY, payload: { city } };
}

export function reset() {
  return { type: RESET };
}

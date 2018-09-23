import { SET_USERNAME, RESET, SET_CITY } from '../../constants/actionTypes';

export function setUsername(username) {
  console.log('####### setUsername');
  return { type: SET_USERNAME, payload: { username } };
}

export function setCity(city) {
  console.log('####### setCity');
  return { type: SET_CITY, payload: { city } };
}

export function reset() {
  console.log('####### reset');
  return { type: RESET };
}

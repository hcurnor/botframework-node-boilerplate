import { SET_USERNAME, RESET } from '../../constants/actionTypes';

export function setUsername(username) {
  return { type: SET_USERNAME, payload: { username } };
}

export function setCity(city) {
  return { type: SET_USERNAME, payload: { city } };
}

export function reset() {
  return { type: RESET };
}

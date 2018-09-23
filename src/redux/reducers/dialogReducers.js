import { SET_USERNAME, RESET, SET_CITY } from '../../constants/actionTypes';

const defaultState = {
  city: null,
  username: null,
};
export default function conversationReduce(state = defaultState, action) {
  switch (action.type) {
    case RESET:
      return defaultState;
    case SET_CITY:
      return { ...state, city: action.payload.city };
    case SET_USERNAME:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}

import * as actionTypes from '../../constants/actionTypes';

const defaultState = {
  city: null,
  username: null,
};
export default function conversationReduce(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.RESET:
      return defaultState;
    case actionTypes.SET_CITY:
      return { ...state, city: action.payload.city };
    case actionTypes.SET_USERNAME:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}

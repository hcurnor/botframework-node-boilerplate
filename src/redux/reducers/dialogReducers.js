import { SET_USERNAME, RESET, SET_CITY } from '../../constants/actionTypes';

const defaultState = {
  city: null,
  username: null,
};
export default function conversationReduce(state = defaultState, action) {
  switch (action.type) {
    case RESET:
      console.log('************** Fired RESET');
      return defaultState;
    case SET_CITY:
      console.log('************** Fired SET_CITY');
      return { ...state, city: action.payload.city };
    case SET_USERNAME:
      console.log('************** Fired SET_USERNAME');
      return { ...state, username: action.payload.username };
    default:
      console.log('************** Fired DEFAULT');
      return state;
  }
}

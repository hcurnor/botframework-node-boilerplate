import { SET_USERNAME } from '../../constants/actionTypes';

const defaultState = {
  city: null,
  username: null,
};
export default function conversationReduce(state = defaultState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}

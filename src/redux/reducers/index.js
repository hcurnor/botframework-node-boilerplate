import { combineReducers } from 'redux';
import dialogReducers from './dialogReducers';

export default combineReducers({
  dialog: dialogReducers,
});

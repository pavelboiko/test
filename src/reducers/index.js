import { combineReducers } from 'redux';
import Main from './main';
import Settings from './settings';
import Popups from './popups';

const rootReducer = combineReducers({
  Main,
  Settings,
  Popups
});

export default rootReducer;

import { combineReducers } from 'redux';
import snippetsReducer from './snippetsReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  snippets: snippetsReducer,
  settings: settingsReducer,
});

export default rootReducer;

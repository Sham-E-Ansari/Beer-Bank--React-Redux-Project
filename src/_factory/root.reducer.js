import { combineReducers } from 'redux';
import { beer } from './beer.reducer';

const rootReducer = combineReducers({
  beer
});

export default rootReducer;

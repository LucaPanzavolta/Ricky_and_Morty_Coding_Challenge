import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
});

export default rootReducer;

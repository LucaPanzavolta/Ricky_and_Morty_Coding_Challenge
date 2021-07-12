import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import signInReducer from './signin.reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signInReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import signInReducer from './signin.reducer';
import charactersReducer from './characters.reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signInReducer,
  characters: charactersReducer,
});

export default rootReducer;

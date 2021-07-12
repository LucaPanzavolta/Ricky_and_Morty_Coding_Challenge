import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import signInReducer from './signin.reducer';
import charactersReducer from './characters.reducer';
import verifyAuthenticationReducer from './verifyAuthentication.reducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signInReducer,
  characters: charactersReducer,
  authenticatedUser: verifyAuthenticationReducer,
});

export default rootReducer;

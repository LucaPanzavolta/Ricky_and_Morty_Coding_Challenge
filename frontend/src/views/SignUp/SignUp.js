import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import signUpThunk from '../../redux/thunks/signup.thunk';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signupError = useSelector((state) => state.signup.error);

  const submitCallback = (formState) => {
    dispatch(signUpThunk(formState))
      .then(() => history.push('/signin?redirectedFrom=signup'))
      .catch((error) => { console.error({ error }); }); // eslint-disable-line
  };

  return (
    <AuthForm label="Sign-Up" submitCallback={submitCallback} error={signupError} />
  );
}

export default SignUp;

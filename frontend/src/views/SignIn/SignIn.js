import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import signInThunk from '../../redux/thunks/signin.thunk';

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const signinError = useSelector((state) => state.signin.error);

  const submitCallback = async (formState) => {
    dispatch(signInThunk(formState))
      .then(() => { history.push('/'); })
      .catch((error) => { console.error({ error }); }); // eslint-disable-line
  };

  return (
    <AuthForm label="Sign-in" submitCallback={submitCallback} error={signinError} />
  );
}

export default SignIn;

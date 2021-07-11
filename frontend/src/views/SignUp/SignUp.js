import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

function SignUp() {
  const submitCallback = (formState) => {
    console.log(formState); // eslint-disable-line
  };

  return (
    <AuthForm label="Sign-Up" submitCallback={submitCallback} />
  );
}

export default SignUp;

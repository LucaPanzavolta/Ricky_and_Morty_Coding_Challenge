import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

function SignIn() {
  const submitCallback = async (formState) => {
    console.log(formState) // eslint-disable-line
  };

  return (
    <AuthForm label="Sign-in" submitCallback={submitCallback} />
  );
}

export default SignIn;

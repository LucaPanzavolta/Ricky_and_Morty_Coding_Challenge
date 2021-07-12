import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AuthForm.scss';

function AuthForm({ label, submitCallback, error = null }) {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setFormState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitCallback(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <p className="auth-form__cta-text">{`Please ${label}`}</p>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} minLength={6} />
      <button className="auth-form__submit-button" type="submit">{label}</button>
      { error && <p className="auth-form__error-text">{error.message || 'An error occurred.'}</p>}
    </form>
  );
}

AuthForm.propTypes = {
  label: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

AuthForm.defaultProps = {
  error: null,
};

export default AuthForm;

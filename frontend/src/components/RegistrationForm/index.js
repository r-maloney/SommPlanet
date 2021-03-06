import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "../AuthFormModal/AuthForm.css";

function RegistrationForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className='auth__form'>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className='auth__form-group'>
        <label className='auth__label'>Email</label>
        <input
          className='auth__input'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='auth__form-group'>
        <label className='auth__label'>Username</label>
        <input
          className='auth__input'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className='auth__form-group'>
        <label className='auth__label'>Password</label>
        <input
          className='auth__input'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='auth__form-group'>
        <label className='auth__label'>Confirm Password</label>
        <input
          className='auth__input'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button className='auth-form__button' type='submit'>
        Sign Up
      </button>
    </form>
  );
}

export default RegistrationForm;

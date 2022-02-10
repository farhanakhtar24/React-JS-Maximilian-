import React from 'react';
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValidValue: enteredNameIsValid,
    hasError: nameInputHasError,
    valueCHangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValidValue: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueCHangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim().includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const fromSubmission = function (e) {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={ fromSubmission }>
      <div className={ nameInputClasses }>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={ nameChangeHandler } onBlur={ nameBlurHandler } value={ enteredName } />
        { nameInputHasError && <p className='error-text'>Name must not be empty.</p> }
      </div>

      <div className={ emailInputClasses }>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={ emailChangeHandler } onBlur={ emailBlurHandler } value={ enteredEmail } />
        { emailInputHasError && <p className='error-text'>Email must be entered here.</p> }
      </div>
      <div className="form-actions">
        <button disabled={ !formIsValid }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

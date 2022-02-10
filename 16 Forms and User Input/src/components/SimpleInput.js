import React, { useEffect, useState } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim().includes('@');

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const EmailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = function (e) {
    setEnteredName(e.target.value);
  }

  const emailInputHandler = function (e) {
    setEnteredEmail(e.target.value);
  }

  const nameInputBlurHandler = function () {
    setEnteredNameTouched(true);
  }
  const emailInputBlurHandler = function () {
    setEnteredEmailTouched(true);
  }

  const fromSubmission = function (e) {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
  }

  // useRef();

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = EmailInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={ fromSubmission }>
      <div className={ nameInputClasses }>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={ nameInputHandler } onBlur={ nameInputBlurHandler } value={ enteredName } />
        { nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p> }
      </div>

      <div className={ emailInputClasses }>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={ emailInputHandler } onBlur={ emailInputBlurHandler } value={ enteredEmail } />
        { EmailInputIsValid && <p className='error-text'>Email must be entered here.</p> }
      </div>
      <div className="form-actions">
        <button disabled={ !formIsValid }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

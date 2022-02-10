import React from "react";
import useValidation from "../hooks/use-Validation";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValidValue: enteredFirstNameIsValid,
    checkInputHasError: FirstNameInputHasError,
    inputChangeHandler: FirstnameChangeHandler,
    inputBlurHandler: FirstnameBlurHandler,
    resetInputfunction: resetFirstNameInput
  } = useValidation(value => value.trim() !== '');

  const {
    value: enteredLastName,
    isValidValue: enteredLastNameIsValid,
    checkInputHasError: LastNameInputHasError,
    inputChangeHandler: LastnameChangeHandler,
    inputBlurHandler: LastnameBlurHandler,
    resetInputfunction: resetLastNameInput
  } = useValidation(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValidValue: enteredEmailIsValid,
    checkInputHasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInputfunction: resetEmailInput
  } = useValidation(value => value.trim().includes('@'));


  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = function (e) {
    e.preventDefault();

    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
  }

  const firstNameInputClass = FirstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClass = LastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={ formSubmitHandler }>
      <div className='control-group'>
        <div className={ firstNameInputClass }>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={ FirstnameChangeHandler } onBlur={ FirstnameBlurHandler } value={ enteredFirstName } />
          { FirstNameInputHasError && <p className='error-text'>First Name Input should not be empty</p> }
        </div>
        <div className={ lastNameInputClass }>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={ LastnameChangeHandler } onBlur={ LastnameBlurHandler } value={ enteredLastName } />
          { LastNameInputHasError && <p className='error-text'>Last Name Input should not be empty</p> }
        </div>
      </div>
      <div className={ emailInputClass }>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={ emailChangeHandler } onBlur={ emailBlurHandler } value={ enteredEmail } />
        { emailInputHasError && <p className='error-text'>E-mail Input should contain '@'</p> }
      </div>
      <div className='form-actions'>
        <button disabled={ !formIsValid }>Submit</button>
      </div>
    </form >
  );
};

export default BasicForm;

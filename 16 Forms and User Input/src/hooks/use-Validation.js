import { useState } from 'react';

function useValidation(validationFunction) {
    const [enteredInput, setEnteredInput] = useState('');
    const [inputWasTouched, setInputWasTouched] = useState(false);

    const checkValidity = validationFunction(enteredInput);
    const checkInputHasError = !checkValidity && inputWasTouched;

    const inputChangeHandler = function (e) {
        setEnteredInput(e.target.value);
    }

    const inputBlurHandler = function () {
        setInputWasTouched(true);
    }

    const resetInputfunction = function () {
        setEnteredInput('');
        setInputWasTouched(false);
    }

    return {
        value: enteredInput,
        isValidValue: checkValidity,
        checkInputHasError,
        inputChangeHandler,
        inputBlurHandler,
        resetInputfunction
    };
}

export default useValidation;

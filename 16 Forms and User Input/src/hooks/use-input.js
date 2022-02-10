import { useState } from 'react';



const useInput = function (validateValue) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueCHangeHandler = function (e) {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = function () {
        setIsTouched(true);
    }

    const reset = function () {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValidValue: valueIsValid,
        hasError,
        valueCHangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;

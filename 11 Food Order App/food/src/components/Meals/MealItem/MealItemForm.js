import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm = function (props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = function (event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = Number(enteredAmount);

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
    };

    return (
        <form className={ classes.form } onSubmit={ submitHandler }>
            <Input
                ref={ amountInputRef }
                label="Amount"
                input={ {
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                } }></Input>
            <button>+ Add</button>
            { !amountIsValid && <p>Please enter a valid amount (1-5)</p> }
        </form>
    );
};

export default MealItemForm;
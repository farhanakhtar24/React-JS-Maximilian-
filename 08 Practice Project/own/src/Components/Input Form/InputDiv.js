import React from 'react';
import classes from './InputDiv.module.css';



const InputDiv = function (props) {
    return (
        <div className={ classes.FormInputDivs }>
            <label>{ props.children }</label>
            <input></input>
        </div>
    );
}

export default InputDiv;
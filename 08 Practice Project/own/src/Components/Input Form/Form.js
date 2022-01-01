import React from 'react';
import classes from './Form.module.css';

const Form = function (props) {
    return (
        <div className={ classes.MainFormDiv }>
            <form>
                <div className={ classes.FormInputDivs }>
                    <label>Username</label>
                    <input></input>
                </div>
                <div className={ classes.FormInputDivs }>
                    <label>Age (Years)</label>
                    <input></input>
                </div>
            </form>
        </div>
    );
}

export default Form;
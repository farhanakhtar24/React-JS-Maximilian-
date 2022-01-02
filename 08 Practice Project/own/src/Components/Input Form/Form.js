import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './Form.module.css';
// import InputDiv from './InputDiv';



const Form = function ({ onAdd }) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const updateUsername = function (username) {
        setUsername(username);
    }

    const updateAge = function (age) {
        setAge(age);
    }

    const submitHadler = function (e) {
        e.preventDefault();
        onAdd(username, age);

        setUsername('');
        setAge('');
    }

    return (
        <div className={ classes.MainFormDiv }>
            <form onSubmit={ submitHadler }>
                <label>Username</label>
                <input onChange={ (e) => { updateUsername(e.target.value) } } value={ username }></input>
                <label>Age</label>
                <input onChange={ (e) => { updateAge(e.target.value) } } value={ age }></input>
                <Button type={ 'submit' }>Add User</Button>
            </form>
        </div>
    );
}

export default Form;
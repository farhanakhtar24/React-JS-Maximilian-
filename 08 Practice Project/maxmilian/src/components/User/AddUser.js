import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";


import classes from "./AddUser.module.css";


const AddUser = function (props) {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = function (e) {
        e.preventDefault();
        console.log(enteredUserName, enteredAge);

        if (enteredUserName.trim().length === 0 || Number(enteredAge.trim()).length === 0) {
            return;
        }

        if (Number(enteredAge) < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameChangeHandler = function (event) {
        setEnteredUserName(event.target.value)
    }
    const ageHandler = function (event) {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={ classes.input }>
            <form onSubmit={ addUserHandler }>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={ userNameChangeHandler } value={ enteredUserName }></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={ ageHandler } value={ enteredAge }></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
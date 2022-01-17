import React from "react";
import Card from "../UI/Card";

import classes from './UsersList.module.css';

const UsersList = function (props) {
    return (
        <Card className={ classes.users }>
            <ul>
                { props.users.map(user => {
                    return <li>{ user.name } ( { user.age } Years old )</li>
                }) }
            </ul>
        </Card>
    );
}

export default UsersList;
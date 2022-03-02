import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import Products from './Products';

const Welcome = () => {
    return (
        <Fragment>
            <h1>Welcome Page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome New User</p>
            </Route>
        </Fragment>
    )
};

export default Welcome;
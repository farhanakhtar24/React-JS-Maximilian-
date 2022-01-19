import React, { Fragment } from 'react';
import classes from './Header.module.css';
import Mealsimg from '../../Assets/meals.jpg'
import HeaderCartButtom from './HeaderCartButton';


const Header = function (props) {
    return (
        <Fragment>
            <header className={ classes.header }>
                <h1>ReactMeals</h1>
                <HeaderCartButtom></HeaderCartButtom>
            </header>
            <div className={ classes["main-image"] }>
                <img src={ Mealsimg } alt='A table full of delicious food'></img>
            </div>
        </Fragment>
    );
};

export default Header;
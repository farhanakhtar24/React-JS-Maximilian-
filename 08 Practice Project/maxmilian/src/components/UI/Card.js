import React from "react";
import classes from './Card.module.css'

const Card = function (props) {
    return (
        <div className={ `${classes.Card} ${props.className}` }>{ props.children }</div>
    );
};

export default Card;